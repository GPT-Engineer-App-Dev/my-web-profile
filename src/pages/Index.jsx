import { Box, Container, VStack, Text, Heading, Button, Flex, Link, SimpleGrid, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color}>
      {/* Navigation Bar */}
      <Box as="nav" bg="teal.500" color="white" py={4}>
        <Container maxW="container.md" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">My Portfolio</Heading>
          <Button onClick={toggleColorMode} variant="ghost">
            {useColorModeValue(<FaMoon />, <FaSun />)}
          </Button>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container centerContent maxW="container.md" py={16}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl">Welcome to My Personal Website</Heading>
          <Text fontSize="lg">I am a passionate developer specializing in Language Models (LLM). Explore my projects and get in touch!</Text>
          <Button colorScheme="teal" size="lg">Get in Touch</Button>
        </VStack>
      </Container>

      {/* Portfolio Section */}
      <Container maxW="container.md" py={16}>
        <Heading as="h3" size="lg" mb={8} textAlign="center">My Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/400" alt="Project 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Project 1</Heading>
              <Text mb={4}>Description of project 1.</Text>
              <Link color="teal.500" href="#">Learn More</Link>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/400" alt="Project 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Project 2</Heading>
              <Text mb={4}>Description of project 2.</Text>
              <Link color="teal.500" href="#">Learn More</Link>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Contact Section */}
      <Container maxW="container.md" py={16}>
        <Heading as="h3" size="lg" mb={8} textAlign="center">Contact Me</Heading>
        <VStack spacing={4} textAlign="center">
          <Text fontSize="lg">Feel free to reach out for collaborations or just a friendly chat.</Text>
          <Button colorScheme="teal" size="lg">Email Me</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;