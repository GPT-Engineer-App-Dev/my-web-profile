import { Box, Container, VStack, Text, Heading, Button, HStack, SimpleGrid, Image, Link, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">My Personal Website</Heading>
          <HStack spacing={8}>
            <Link href="#hero" _hover={{ textDecoration: "none", color: "brand.700" }}>Home</Link>
            <Link href="#portfolio" _hover={{ textDecoration: "none", color: "brand.700" }}>Portfolio</Link>
            <Link href="#contact" _hover={{ textDecoration: "none", color: "brand.700" }}>Contact</Link>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box id="hero" bg="gray.100" py={20}>
        <Container maxW="container.md" textAlign="center">
          <VStack spacing={4}>
            <Heading as="h2" size="2xl">Welcome to My Personal Website</Heading>
            <Text fontSize="lg">I am a web developer specializing in creating beautiful and functional websites.</Text>
            <Button colorScheme="blue" size="lg">Learn More</Button>
          </VStack>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Portfolio</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* Example Project */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Project Image" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Project Title</Heading>
                <Text mb={4}>Brief description of the project. This project showcases my skills in LLM.</Text>
                <Button as="a" href="#" colorScheme="blue" size="sm">View Project</Button>
              </Box>
            </Box>
            {/* Add more projects as needed */}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" bg="gray.100" py={20}>
        <Container maxW="container.md" textAlign="center">
          <Heading as="h3" size="xl" mb={8}>Contact Me</Heading>
          <VStack spacing={4}>
            <Text>If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn or GitHub.</Text>
            <HStack spacing={4}>
              <Button as="a" href="mailto:your-email@example.com" leftIcon={<FaEnvelope />} colorScheme="blue" variant="outline">Email</Button>
              <Button as="a" href="https://github.com/your-github" leftIcon={<FaGithub />} colorScheme="blue" variant="outline">GitHub</Button>
              <Button as="a" href="https://linkedin.com/in/your-linkedin" leftIcon={<FaLinkedin />} colorScheme="blue" variant="outline">LinkedIn</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;