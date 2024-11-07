import { Flex, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";

interface PopupProps {
  openModal: boolean;
}

export default function InstructionsPopUp({ openModal }: PopupProps) {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (openModal) open(); // Open the modal when the prop changes
  }, [openModal, open]);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        styles={{
          content: {
            backgroundColor: 'rgba(50, 50, 50, .75)', // Dark background for modal content
            borderRadius: "3dvh", // Adjust border radius to fit better
            minHeight: '50dvh', // Ensure a minimum height for the modal content
            width: '70dvw', // Set a reasonable width for the modal
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
            zIndex: 100, // Lower z-index for the overlay
          },
        }}
      >
        <Flex
          p={0}
          m={0}
          w="100%"
          h="100%" // Ensure Flex takes full height of the modal content
          bg="rgba(5, 5, 5, 1)"
          bd={20}
          style={{
            borderRadius: "2dvh",
            flexDirection: "column",
            justifyContent: "center", // Center content vertically
            alignItems: "center",
            padding: '3dvh', // Padding for some space around content
          }}
        >
          <Text
            mt={"5dvh"}
            size={"5dvh"} // Use dvh for better scaling
            fw={700}
            variant="gradient"
            gradient={{ from: '#243913', to: '#67bb5a', deg: 360 }}
            style={{ textAlign: "center" }}
          >
            How to Play
          </Text>
          <Text
            mt={"6dvh"}
            pb={"1dvh"}
            size={"3.5dvh"}
            variant="gradient"
            gradient={{ from: '#3b3b3b', to: '#a8a8a8', deg: 360 }}
            style={{ textAlign: "center" }}
          >
            Guess the Secret Word!
          </Text>
          <Text
            mt={"3dvh"}
            pb={"1dvh"}
            size={"2.5dvh"}
            variant="gradient"
            gradient={{ from: '#3b3b3b', to: '#a8a8a8', deg: 360 }}
            style={{ textAlign: "center" }}
          >
            - You have a limited number of guesses to figure out the word.
          </Text>
          <Text
            mt={"1.5dvh"}
            pb={"1dvh"}
            size={"2.5dvh"}
            variant="gradient"
            gradient={{ from: '#3b3b3b', to: '#a8a8a8', deg: 360 }}
            style={{ textAlign: "center" }}
          >
            - Each guess will tell you how close you are to the secret word.
          </Text>
          <Text
            mt={"1.5dvh"}
            pb={"1dvh"}
            size={"2.5dvh"}
            variant="gradient"
            gradient={{ from: '#3b3b3b', to: '#a8a8a8', deg: 360 }}
            style={{ textAlign: "center" }}
          >
            - If you guess correctly, you win! Otherwise, you'll lose after exhausting your attempts.
          </Text>
          <Text
            mt={"3dvh"}
            pb={"1dvh"}
            size={"3.5dvh"}
            variant="gradient"
            gradient={{ from: '#252525', to: '#bdbdbd', deg: 360 }}
            style={{ textAlign: "center" }}
          >
            Good luck!
          </Text>
        </Flex>
      </Modal>
    </div>
  );
}
