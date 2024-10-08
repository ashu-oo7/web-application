import { VStack,FormControl, FormLabel, Input, InputRightElement, Button,InputGroup } from '@chakra-ui/react'
import React, { useState } from 'react'

const SignUp = () => {
    const [show,setShow] = useState(false)
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmpassowrd,setConfirmpassword] = useState()
    const [pic,setPic] = useState()

    const handleClick = ()=>setShow(!show)

    const postDetails = ()=>{

    }

    const submitHandler = () =>{

    }

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your email"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => handleClick()}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="ConformPassword" isRequired>
        <FormLabel>Conform Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your email"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => handleClick()}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id = "pic">

        <FormLabel >Upload Your Picture</FormLabel>
        <Input 
            type = "file"
            p = {1.5}
            accept = "image/*"
            onChange={(e)=> postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
      colorScheme='blue'
      width="100%"
      style={{marginTop : 15}}
      onClick={submitHandler}>
        SignUp
      </Button>
    </VStack>
  );
}

export default SignUp
