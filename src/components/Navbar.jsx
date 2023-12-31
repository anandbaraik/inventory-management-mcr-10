import React from 'react'
import {Flex, HStack, Heading, useColorModeValue} from '@chakra-ui/react';
import {ColorModeSwitcher} from "../ColorModeSwitcher"
const Navbar = () => {
  return (
    <Flex
      justifyContent={'space-between'}
      gap="1rem"
      alignItems={'center'}
      px={{ base: 2, lg: 4 }}
      py={2}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.300', 'gray.700')}
    >
      <HStack spacing={4} >
        <Heading fontSize={{ base: '1.1rem', lg: '1.5rem' }} >
            Inventory Management
        </Heading>
      </HStack>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  )
}
export default Navbar