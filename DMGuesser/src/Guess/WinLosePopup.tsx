import { Flex, Modal, Text } from "@mantine/core";
import Confetti from 'react-confetti'
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";

interface PopupProps {
    word: string;
    hasGameEnded: boolean;
    openModal: boolean;
    hasWon: boolean;
    currentGuess: number;
}

export default function Popup({ word, hasGameEnded, openModal, hasWon, currentGuess }: PopupProps) {
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        openModal && open()
    }, [openModal])

    return (
        <div>
            <Confetti numberOfPieces={500} run={hasGameEnded && hasWon} recycle={opened} />
            <Modal opened={opened} onClose={close} withCloseButton={false} centered
                styles={{
                    content: {
                        backgroundColor: 'rgba(50, 50, 50, .75)',
                        borderRadius: "3dvh",
                    },
                }}>
                <Flex
                    p={0}
                    m={0}
                    w="100%"
                    h={hasWon ? "37dvh" : "30dvh"}
                    bg="rgba(5, 5, 5, 1)"
                    bd={20}
                    style={{
                        borderRadius: "2dvh",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >
                    <Text
                        mt={"5dvh"}
                        size={"5dvh"}
                        fw={700}
                        variant="gradient"
                        gradient={hasWon ? { from: '#243913', to: '#67bb5a', deg: 360 } :
                            { from: '#391313', to: '#d54a4a', deg: 360 }}
                        style={{ textAlign: "center" }} >
                        {hasWon ? "Win" : "Lose"}
                    </Text>
                    <Text
                        mt={"6dvh"}
                        pb={"1dvh"}
                        size={"3.5dvh"}
                        variant="gradient"
                        gradient={{ from: '#3b3b3b', to: '#a8a8a8', deg: 360 }}
                        style={{ textAlign: "center" }} >
                        Damage: {Number(word)}
                    </Text>
                    {
                        hasWon &&
                        <Text
                            mt={"5dvh"}
                            pb={"1dvh"}
                            size={"3.5dvh"}
                            variant="gradient"
                            gradient={{ from: '#252525', to: '#bdbdbd', deg: 360 }}
                            style={{ textAlign: "center" }} >
                            Tries: {currentGuess}
                        </Text>
                    }
                </Flex>
            </Modal>
        </div>
    )
}