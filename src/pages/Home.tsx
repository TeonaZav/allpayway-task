import { ServiceList, TextBox } from "../components";

const Home = () => {
  return (
    <>
      <TextBox
        heading="Web Development"
        hasIcon={true}
        content={[
          "Your About Us page is one of the first supporting pages you’ll likely design when building your website, regardless of the industry you’re in.",
          "It may go by different labels—About, Story, Mission—but these types of pages serve the same key purpose: to be the page for a brand to say, 'This is who we are.'",
        ]}
      />

      <ServiceList />
    </>
  );
};

export default Home;
