import { Box, Container, VStack, Text, Heading, Flex, Link, Button, SimpleGrid, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Flex as="nav" bg={bg} color={color} p={4} justifyContent="space-between" alignItems="center" w="100%">
      <Heading size="md">My Portfolio</Heading>
      <Box>
        <Button onClick={toggleColorMode} mr={4}>
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        <Link href="#portfolio" mr={4}>Portfolio</Link>
        <Link href="#contact">Contact</Link>
      </Box>
    </Flex>
  );
};

const HeroSection = () => (
  <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading as="h1" size="2xl">Welcome to My Personal Website</Heading>
      <Text fontSize="xl">I am a web developer specializing in Language Models (LLM).</Text>
    </VStack>
  </Container>
);

const PortfolioSection = () => (
  <Box id="portfolio" p={8} bg={useColorModeValue("gray.50", "gray.800")}>
    <Heading as="h2" size="xl" textAlign="center" mb={6}>Portfolio</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Heading as="h3" size="md" mb={2}>Project 1</Heading>
        <Text>Details about project 1.</Text>
      </Box>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Heading as="h3" size="md" mb={2}>Project 2</Heading>
        <Text>Details about project 2.</Text>
      </Box>
      {/* Add more projects as needed */}
    </SimpleGrid>
  </Box>
);

const ContactSection = () => (
  <Box id="contact" p={8} bg={useColorModeValue("gray.100", "gray.900")}>
    <Heading as="h2" size="xl" textAlign="center" mb={6}>Contact</Heading>
    <VStack spacing={4} align="center">
      <Button as="a" href="https://github.com" leftIcon={<FaGithub />} size="lg">GitHub</Button>
      <Button as="a" href="https://linkedin.com" leftIcon={<FaLinkedin />} size="lg">LinkedIn</Button>
      <Button as="a" href="mailto:email@example.com" leftIcon={<FaEnvelope />} size="lg">Email</Button>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
    </Box>
  );
};

export default Index;