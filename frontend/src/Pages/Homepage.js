import React from 'react'
import {Box,Container,Text,Tabs,Tab,TabList,TabPanels,TabPanel} from '@chakra-ui/react'
import Login from "../Components/Authentication/Login"
import SignUp from "../Components/Authentication/SignUp";

const Homepage = () => {
  return (
    <Container maxW="xl " centerContent>
      <Box
        d="flex"
        justiyContent="center"
        p={3}
        bg={"White"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="work sans"
          color="black"
          textAlign="center"
          backgroundColor="lightblue"
        >
          Connector App
        </Text>
      </Box>

      <Box bg="whitesmoke" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb = "1em">
            <Tab width = "50%">Login</Tab>
            <Tab width= "50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>

            <TabPanel>
              <SignUp/>
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage
