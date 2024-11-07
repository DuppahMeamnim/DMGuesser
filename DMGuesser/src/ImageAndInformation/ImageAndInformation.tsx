import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import damageData from "../DamageData/damageData";
import { ActionIcon, Flex, Image, Paper, Text } from "@mantine/core";
import { Info } from "react-feather";

export default function ImageAndInformation(damageData: damageData) {
    const [opened, { close, open }] = useDisclosure(false);
    const isMobile = useMediaQuery('(max-width: 1100px)')

    return (
        <Paper
            p={0}
            w={isMobile ? "80vw" : "28vw"}
            h={isMobile ? "43vw" : "15vw"}
            mb="25px"
            bg="rgba(0, 0, 0, 0)"
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <ActionIcon
                variant="transparent"
                onClick={() => { opened ? close() : open() }}
                style={{
                    position: 'absolute',
                    top: '3vw',
                    right: '3vw',                    
                    color: 'white',
                    borderRadius: '50%',
                    opacity: opened ? 0 : 1,
                    transform: opened ? 'scale(0.9)' : 'scale(1)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                }}
            >
                <Info size={isMobile ? "4vw" : "2vw"} />
            </ActionIcon>

            <Image
                onClick={() => { opened ? close() : open() }}
                radius={15}
                width="100%"
                height="100%"
                fit="fill"
                src={damageData.image}
                style={{
                    borderRadius: isMobile ? "4vw" : "1vw"
                }}
            />

            {
                <Flex
                    onClick={() => { opened ? close() : open() }}
                    w={isMobile ? "80vw" : "28vw"}
                    h={isMobile ? "43vw" : "15vw"}
                    style={{
                        borderRadius: isMobile ? "4vw" : "1vw",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        opacity: opened ? 1 : 0,
                        transform: opened ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.9)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease', // smooth fade and scale transitions
                    }}
                >
                    <Text ml=".75vw" size={isMobile ? "4vw" : "1.5vw"}>Hit at: {damageData.hitLocation}</Text>
                    <Text ml=".75vw" size={isMobile ? "4vw" : "1.5vw"}>Weapon: {damageData.weapon}</Text>
                    <Text ml=".75vw" size={isMobile ? "4vw" : "1.5vw"}>Went through: {damageData.wentThrough.join(", ")}</Text>
                </Flex>
            }
        </Paper>
    );
}
