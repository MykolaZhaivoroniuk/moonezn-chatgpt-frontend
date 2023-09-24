'use client';
// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { MooneznLogo } from '@/components/icons/Icons';
import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      {/* <MooneznLogo h="26px" w="146px" my="30px" color={logoColor} /> */}
      <Text
        me="auto"
        color={logoColor}
        fontWeight="500"
        fontSize="xx-large"
        textAlign="center"
        width="100%"
        mb="5"
      >
        Moonezon
      </Text>
      <HSeparator mb="20px" w="284px" />
    </Flex>
  );
}

export default SidebarBrand;
