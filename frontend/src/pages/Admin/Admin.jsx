import Header from "../../components/Header";
import AdminHero from "./AdminHero";
import AdminAbout from "./AdminAbout";
import AdminSkill from "./AdminSkill";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import AdminExp from "./AdminExp";

const { TabPane } = Tabs;

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);

  // const items = [
  //   {
  //     id: 1,
  //     label:
  //   }
  // ]

  return (
    <div className="bg-primary h-screen">
      <Header />
      {portfolioData && (
        <div className="bg-[#001529] p-5">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Hero" key="1">
              <AdminHero />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Skill" key="3">
              <AdminSkill />
            </TabPane>
            <TabPane tab="Experience" key="4">
              <AdminExp />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Admin;
