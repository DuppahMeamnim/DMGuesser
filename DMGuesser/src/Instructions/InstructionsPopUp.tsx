import { Flex, Modal, Text, ActionIcon } from "@mantine/core";
import { useEffect } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { XCircle } from "react-feather";

interface PopupProps {
  openModal: boolean;
  closeModal: () => void;
}

export default function InstructionsPopUp({
  openModal,
  closeModal,
}: PopupProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 1100px)");

  useEffect(() => {
    if (openModal) open();
  }, [openModal, open]);

  return (
    <Modal
      opened={opened}
      onClose={() => {
        close();
        closeModal();
      }}
      withCloseButton={false}
      centered
      size={isMobile ? "" : "30dvw"}
      styles={{
        content: {
          backgroundColor: "rgba(50, 50, 50, .75)",
          borderRadius: "3dvh",
          minHeight: "50dvh",
          width: "70dvw",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 100,
        },
      }}
    >
      <Flex
        p="3dvh"
        w="100%"
        h="100%"
        bg="rgba(5, 5, 5, 1)"
        style={{
          borderRadius: "2dvh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <ActionIcon
          onClick={() => {
            close();
            closeModal();
          }}
          variant="transparent"
          w={isMobile ? "5dvw" : "2dvw"}
          h={isMobile ? "5dvw" : "2dvw"}
          style={{
            color: "white",
            position: "absolute",
            top: "1dvh",
            right: "1dvh",
            borderRadius: "50%",
          }}
        >
          <XCircle size="100%" />
        </ActionIcon>

        <Text
          size={isMobile ? "3.5dvh" : "5dvh"}
          fw={700}
          variant="gradient"
          gradient={{ from: "#243913", to: "#67bb5a", deg: 360 }}
          style={{ textAlign: "center", userSelect: "none" }}
        >
          How to Play
        </Text>
        <Text
          mt={"2dvh"}
          pb={"1dvh"}
          size={isMobile ? "2dvh" : "3dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center" }}
        >
          Guess the Damage Dealt!
        </Text>
        <Text
          mt={"2dvh"}
          pb={"1dvh"}
          size={isMobile ? "1.5dvh" : "2.5dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center" }}
        >
          - You have a limited number of guesses to figure out the number.
        </Text>

        <Text
          mt={"1.5dvh"}
          pb={"1dvh"}
          size={isMobile ? "1.5dvh" : "2.5dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center" }}
        >
          ( ! ) For additional info press the image.
        </Text>
        <Text
          mt={"0.5dvh"}
          pb={"1dvh"}
          size={isMobile ? "2.5dvh" : "3.5dvh"}
          variant="gradient"
          gradient={{ from: "#252525", to: "#bdbdbd", deg: 360 }}
          style={{ textAlign: "center" }}
        >
          Good luck!
        </Text>
        <Text
          size={isMobile ? "3.5dvh" : "5dvh"}
          fw={700}
          variant="gradient"
          gradient={{ from: "#001aff", to: "#76a0df", deg: 360 }}
          style={{ textAlign: "center", userSelect: "none" }}
        >
          About
        </Text>
        <Text
          mt={"1dvh"}
          pb={"1dvh"}
          size={isMobile ? "1.3dvh" : "2.3dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center" }}
        >
          Magneti Inc is a 4 developer team specializing in game development.
          Follow us if you're bored.
        </Text>
        <Text
          mt={"1dvh"}
          pb={"1dvh"}
          size={isMobile ? "1.3dvh" : "2.3dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center" }}
        >
          Have any advice or changes please contect us at:
        </Text>
        <Text
          size={isMobile ? "1.5dvh" : "2dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center", marginRight: "3dvh" }}
        >
          Email:
          <a
            href="mailto:magnetiinc@gmail.com"
            style={{
              color: "inherit",
              textDecoration: "underline",
              textDecorationColor: "#717171",
            }}
          >
            {" "}
            magnetiinc@gmail.com
          </a>
        </Text>
        <Text
          mt={"1dvh"}
          pb={"1dvh"}
          size={isMobile ? "1.5dvh" : "2dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center", marginRight: "3dvh" }}
        >
          Bluesky:{" "}
          <a
            href="https://bsky.app/profile/magnetiinc.bsky.social"
            style={{
              color: "inherit",
              textDecoration: "underline",
              textDecorationColor: "#717171",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Magneti Inc
          </a>
        </Text>
        <Text
          mt={"0.5dvh"}
          pb={"0.5dvh"}
          size={isMobile ? "1.5dvh" : "2dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center" }}
        >
          We broke,{" "}
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=568DT9WAJYF9L"
            style={{
              color: "inherit",
              textDecoration: "underline",
              textDecorationColor: "#717171",
            }}
          >
            Donate?
          </a>{" "}
          :3
        </Text>

        <Text
          mt={"2dvh"}
          size={isMobile ? "1.5dvh" : "2.5dvh"}
          variant="gradient"
          gradient={{ from: "#3b3b3b", to: "#a8a8a8", deg: 360 }}
          style={{ textAlign: "center" }}
        >
          All image rights belong to Valve Software.
        </Text>
      </Flex>
    </Modal>
  );
}
