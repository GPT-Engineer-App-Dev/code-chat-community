import { Box, Container, Heading, VStack, Text, Button, HStack, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Tech Discussions Forum
        </Heading>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md" mb={4}>
            Create a New Post
          </Heading>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Title"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
            />
            <Textarea
              placeholder="Content"
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
            />
            <Button colorScheme="teal" onClick={handlePostSubmit}>
              Submit
            </Button>
          </VStack>
        </Box>

        <VStack spacing={4} align="stretch">
          {posts.length === 0 ? (
            <Text>No posts yet. Be the first to post!</Text>
          ) : (
            posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">
                  {post.title}
                </Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;