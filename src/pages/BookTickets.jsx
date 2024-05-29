import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Button, Select, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const BookTickets = () => {
  const location = useLocation();
  const { event } = location.state || {};
  const [numTickets, setNumTickets] = useState(1);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server
    toast({
      title: "Tickets booked.",
      description: `You have successfully booked ${numTickets} ticket(s) for ${event?.name || "the event"}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box py={10}>
      <Container maxW="container.md">
        <Heading as="h2" size="xl" mb={6} textAlign="center">Book Tickets</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="event-name" isReadOnly>
              <FormLabel>Event Name</FormLabel>
              <Input type="text" value={event?.name || ""} readOnly />
            </FormControl>
            <FormControl id="num-tickets" isRequired>
              <FormLabel>Number of Tickets</FormLabel>
              <Select value={numTickets} onChange={(e) => setNumTickets(e.target.value)}>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">Book Tickets</Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default BookTickets;