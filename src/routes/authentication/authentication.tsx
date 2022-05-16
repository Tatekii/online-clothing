import SignUpForm from "@/components/sign-up-form/sign-up-form";
import SignInForm from "@/components/sign-in-form/sign-in-form";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Container,
} from "@chakra-ui/react";

const Authentication = () => {
  return (
    <Container maxW="380px">
      <Tabs isFitted isLazy>
        <TabList mb="1em">
          <Tab>Sign In</Tab>
          <Tab>Sign up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignInForm />
          </TabPanel>
          <TabPanel>
            <SignUpForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
export default Authentication;
