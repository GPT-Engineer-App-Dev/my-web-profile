import { Box, Container, VStack, Text, Heading, Flex, Link, Button, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">My Personal Website</Heading>
        <Flex>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="brand.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to My Personal Website</Heading>
        <Text fontSize="xl">I am a developer specializing in Language Models (LLM)</Text>
      </Box>

      {/* Portfolio Section */}
      <Box as="section" id="portfolio" py={20} px={4}>
        <Heading size="xl" textAlign="center" mb={10}>Portfolio</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>Project 1</Heading>
            <Text>Details about project 1.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>Project 2</Heading>
            <Text>Details about project 2.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>Project 3</Heading>
            <Text>Details about project 3.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" bg="brand.800" color="white" py={20} px={4} textAlign="center">
        <Heading size="xl" mb={10}>Contact</Heading>
        <VStack spacing={4}>
          <Button as="a" href="mailto:your-email@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
            Email Me
          </Button>
          <Flex>
            <IconButton as="a" href="https://github.com/your-profile" icon={<FaGithub />} size="lg" variant="ghost" colorScheme="teal" aria-label="GitHub" />
            <IconButton as="a" href="https://linkedin.com/in/your-profile" icon={<FaLinkedin />} size="lg" variant="ghost" colorScheme="teal" aria-label="LinkedIn" />
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;