import { Box, Container, Flex, Heading, Text, VStack, HStack, Button, Image, Link } from "@chakra-ui/react";
import { FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">EventManager</Heading>
            <HStack spacing={8}>
              <Link href="#upcoming-events" fontSize="lg">Upcoming Events</Link>
              <Link href="#about" fontSize="lg">About</Link>
              <Button colorScheme="teal" variant="outline">Login</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>Discover and Join Amazing Events</Heading>
          <Text fontSize="xl" mb={8}>Find events that match your interests and connect with like-minded people.</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </Container>
      </Box>

      {/* Upcoming Events Section */}
      <Box id="upcoming-events" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Upcoming Events</Heading>
          <VStack spacing={8}>
            {/* Event Card */}
            <Box bg="white" shadow="md" borderRadius="md" overflow="hidden" width="100%">
              <Flex>
                <Image src="https://via.placeholder.com/150" alt="Event Image" objectFit="cover" width="150px" height="150px" />
                <Box p={4} flex="1">
                  <Heading as="h4" size="md">Event Title</Heading>
                  <Text mt={2}><FaCalendarAlt /> Date & Time</Text>
                  <Text mt={2}><FaInfoCircle /> Short Description of the event.</Text>
                  <Button mt={4} colorScheme="teal">Learn More</Button>
                </Box>
              </Flex>
            </Box>
            {/* Repeat Event Card for more events */}
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={8}>
        <Container maxW="container.xl" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} EventManager. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;