import { FC } from "react";
import TextBox from "../TextBox/TextBox";
import ServiceList from "./ServiceList/ServiceLIst";

const ServicesContent: FC = () => {
  return (
    <>
      <TextBox
        heading="Web Development"
        hasIcon={true}
        content={[
          "Your About Us page is one of the first supporting pages you’ll likely design when building your website, regardless of the industry you’re in.",
          "It may go by different labels—About, Story, Mission—but these types of pages serve the same key purpose: to be the page for a brand to say, “This is who we are.”",
          "When a visitor wants to learn more about you or your business, the About page is what they’ll look for. Learn how to craft the perfect page for your business, with About Us page examples from successful brands to inspire you.",
          "It may go by different labels—About, Story, Mission—but these types of pages serve the same key purpose: to be the page for a brand to say, “This is who we are.",
          "When a visitor wants to learn more abou",
        ]}
      />

      <ServiceList />
    </>
  );
};

export default ServicesContent;
