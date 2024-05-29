import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, Image, useToast } from "@chakra-ui/react";
import { useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const toast = useToast();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server
    toast({
      title: "Event created.",
      description: "Your event has been successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box py={10}>
      <Container maxW="container.md">
        <Heading as="h2" size="xl" mb={6} textAlign="center">Create New Event</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="event-name" isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <FormControl id="location" isRequired>
              <FormLabel>Location</FormLabel>
              <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Event Image</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {image && <Image src={image} alt="Event" mt={4} />}
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">Create Event</Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateEvent;