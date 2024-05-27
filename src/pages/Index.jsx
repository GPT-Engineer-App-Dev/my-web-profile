import { Box, Container, VStack, Text, Heading, Button, HStack, SimpleGrid, Image, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Heading size="md">My Personal Website</Heading>
          <HStack spacing={4}>
            <Link href="#hero" _hover={{ textDecoration: "none" }}>Home</Link>
            <Link href="#portfolio" _hover={{ textDecoration: "none" }}>Portfolio</Link>
            <Link href="#contact" _hover={{ textDecoration: "none" }}>Contact</Link>
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box id="hero" bg="gray.100" py={20} textAlign="center">
        <VStack spacing={4}>
          <Heading size="2xl">Hello, I'm [Your Name]</Heading>
          <Text fontSize="xl">A passionate developer specializing in Language Models</Text>
          <Button colorScheme="blue" size="lg">Learn More</Button>
        </VStack>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" py={20}>
        <Heading textAlign="center" mb={10}>Portfolio</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} px={8}>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Project 1" />
            <Box p={4}>
              <Heading size="md">Project 1</Heading>
              <Text mt={2}>Description of project 1.</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Project 2" />
            <Box p={4}>
              <Heading size="md">Project 2</Heading>
              <Text mt={2}>Description of project 2.</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Project 3" />
            <Box p={4}>
              <Heading size="md">Project 3</Heading>
              <Text mt={2}>Description of project 3.</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box id="contact" bg="gray.100" py={20} textAlign="center">
        <Heading mb={10}>Contact</Heading>
        <VStack spacing={4}>
          <Text fontSize="lg">Feel free to reach out to me via the following platforms:</Text>
          <HStack spacing={4}>
            <IconButton as={Link} href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" isRound />
            <IconButton as={Link} href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isRound />
            <IconButton as={Link} href="mailto:your-email@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" isRound />
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;