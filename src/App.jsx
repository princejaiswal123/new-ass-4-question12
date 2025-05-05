import {
  Box,
  Flex,
  Text,
  Heading,
  Avatar,
  VStack,
  Stack,
  Button,
  Spacer,
} from "@chakra-ui/react";

const d = [
  {
    title: "Efficient Collaborating",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation",
    avatar: "/avatar.jpg",
  },
  {
    title: "Intuitive Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation",
    avatar: "/avatar.jpg",
  },
  {
    title: "Mindblowing Service",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation",
    avatar: "/avatar.jpg",
  },
];

export default function ResponsiveUI() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Flex
        as="nav"
        bg="white"
        px={6}
        py={4}
        shadow="md"
        align="center"
        justify="space-between"
      >
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Button colorScheme="teal" size="sm">
          Contact Us
        </Button>
      </Flex>

      <Box p={6}>
        <VStack spacing={3} textAlign="center" mb={8}>
          <Heading size="lg">Our Clients Speak</Heading>
          <Text color="gray.600">
            We have been working with clients around the world
          </Text>
        </VStack>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          justify="center"
          align="stretch"
        >
          {d.map((t, i) => (
            <Box
              key={i}
              bg="white"
              p={5}
              rounded="md"
              shadow="sm"
              textAlign="center"
            >
              <Text fontWeight="bold" mb={2}>
                {t.title}
              </Text>
              <Text fontSize="sm" color="gray.600" mb={4}>
                {t.text}
              </Text>
              <Avatar src={t.avatar} name={t.name} mx="auto" />
              <Text mt={2} fontWeight="medium">
                {t.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {t.role}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
