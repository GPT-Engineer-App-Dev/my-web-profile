import { Box, Container, VStack, Text, Heading, SimpleGrid, GridItem, Link, IconButton, HStack, Flex, Spacer, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.700" color="white" padding={4}>
        <Box>
          <Heading size="md">My Personal Website</Heading>
        </Box>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#hero" color="white">Home</Link>
          <Link href="#portfolio" color="white">Portfolio</Link>
          <Link href="#contact" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box id="hero" bg="brand.800" color="white" padding={16} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to My Personal Website</Heading>
        <Text fontSize="xl">I am a developer specializing in Language Models (LLM). Explore my projects and get in touch!</Text>
      </Box>

      {/* Portfolio Section */}
      <Container id="portfolio" maxW="container.lg" py={16}>
        <Heading size="xl" mb={8} textAlign="center">Portfolio</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
              <Heading size="md" mb={2}>Project 1</Heading>
              <Text mb={4}>Description of project 1. This project showcases my work in LLM.</Text>
              <Button as="a" href="#" colorScheme="blue">View Project</Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
              <Heading size="md" mb={2}>Project 2</Heading>
              <Text mb={4}>Description of project 2. This project showcases my work in LLM.</Text>
              <Button as="a" href="#" colorScheme="blue">View Project</Button>
            </Box>
          </GridItem>
          {/* Add more projects as needed */}
        </SimpleGrid>
      </Container>

      {/* Contact Section */}
      <Box id="contact" bg="brand.900" color="white" py={16} textAlign="center">
        <Heading size="xl" mb={8}>Contact</Heading>
        <Text fontSize="lg" mb={4}>Feel free to reach out to me through any of the platforms below:</Text>
        <HStack spacing={8} justify="center">
          <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" colorScheme="whiteAlpha" />
          <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="whiteAlpha" />
          <IconButton as="a" href="mailto:example@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" colorScheme="whiteAlpha" />
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;