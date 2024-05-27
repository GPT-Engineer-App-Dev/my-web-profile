import { Box, Container, VStack, Text, Heading, Flex, Link, Button, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Personal Website</Heading>
        <Flex>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="brand.700" color="white" py={20} textAlign="center">
        <VStack spacing={4}>
          <Heading as="h2" size="2xl">Hello, I'm [Your Name]</Heading>
          <Text fontSize="xl">A passionate developer specializing in Language Models</Text>
          <Button colorScheme="teal" size="lg" mt={4}>Learn More</Button>
        </VStack>
      </Box>

      {/* Portfolio Section */}
      <Box as="section" id="portfolio" py={20} px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Portfolio</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={2}>Project 1</Heading>
            <Text>Details about project 1...</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={2}>Project 2</Heading>
            <Text>Details about project 2...</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={2}>Project 3</Heading>
            <Text>Details about project 3...</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" bg="brand.800" color="white" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Contact</Heading>
        <VStack spacing={4}>
          <Text fontSize="lg">Feel free to reach out to me via the following platforms:</Text>
          <Flex>
            <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" m={2} />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" m={2} />
            <IconButton as="a" href="mailto:your-email@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" m={2} />
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;