import { Box, Container, VStack, Text, Heading, Flex, Link, Button, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">My Personal Website</Heading>
          <Flex>
            <Link href="#portfolio" mx={2}>Portfolio</Link>
            <Link href="#contact" mx={2}>Contact</Link>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <VStack spacing={4}>
            <Heading as="h2" size="2xl">Hello, I'm [Your Name]</Heading>
            <Text fontSize="xl">A passionate developer specializing in Language Models</Text>
            <Button colorScheme="blue" size="lg" mt={4}>Learn More</Button>
          </VStack>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box as="section" id="portfolio" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} textAlign="center">Portfolio</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* Example Project */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
              <Heading as="h3" size="md" mb={2}>Project Title</Heading>
              <Text mb={4}>Brief description of the project.</Text>
              <Button as="a" href="#" colorScheme="blue" size="sm">View Project</Button>
            </Box>
            {/* Add more projects as needed */}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={8}>Contact</Heading>
          <VStack spacing={4}>
            <Text fontSize="lg">Feel free to reach out to me via the following platforms:</Text>
            <Flex justifyContent="center">
              <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" mx={2} />
              <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" mx={2} />
              <IconButton as="a" href="mailto:your-email@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" mx={2} />
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;