import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import damageData from "../DamageData/damageData";
import { ActionIcon, Flex, Image, Paper, Text } from "@mantine/core";
import { Info } from "react-feather";
import { useEffect, useState } from "react";

export default function ImageAndInformation(damageData: damageData) {
    const [opened, { close, open }] = useDisclosure(false);
    const isMobile = useMediaQuery('(max-width: 1100px)')
    const [isBouncing, setIsBouncing] = useState(false);
    const [hasBeenOpened, setHasBeenOpened] = useState(false);

    useEffect(() => {
        if (!hasBeenOpened) {
            const interval = setInterval(() => {
                setIsBouncing(true);

                setTimeout(() => setIsBouncing(false), 600); 

            }, 5000);

            return () => clearInterval(interval);
        }
    }, [hasBeenOpened]);

    const handleClick = () => {
        if (opened) {
            close();
        } else {
            open();
            setHasBeenOpened(true);
        }
        setIsBouncing(false);
    };

    return (
        <Paper
            p={0}
            w={isMobile ? "80dvw" : "28dvw"}
            h={isMobile ? "43dvw" : "15dvw"}
            mb="25px"
            bg="rgba(0, 0, 0, 0)"
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <ActionIcon
                variant="transparent"
                className={isBouncing ? "bounce-animation" : ""}
                onClick={handleClick}
                w={isMobile ? "5dvw" : "2dvw"}
                h={isMobile ? "5dvw" : "2dvw"}
                mr={isMobile ? "2.2dvw" : ".5dvw"}
                mt={isMobile ? "2dvw" : ".5dvw"}
                style={{
                    position: 'absolute',
                    top: '0%',
                    right: '0%',
                    color: 'white',
                    borderRadius: '50%',
                    opacity: opened ? 0 : 1,
                    transform: opened ? 'scale(0.9)' : 'scale(1)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                }}
            >
                <Info
                    size="100%" />
            </ActionIcon>

            <Image
                onClick={handleClick}
                radius={15}
                width="100%"
                height="100%"
                fit="fill"
                src={damageData.image}
                style={{
                    borderRadius: isMobile ? "4dvw" : "1dvw"
                }}
            />

            {
                <Flex
                    onClick={handleClick}
                    w={isMobile ? "80dvw" : "28dvw"}
                    h={isMobile ? "43dvw" : "15dvw"}
                    style={{
                        borderRadius: isMobile ? "4dvw" : "1dvw",
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
                    }}>
                    <Text ml=".75dvw" size={isMobile ? "4dvw" : "1.5dvw"}>Hit at: {damageData.hitLocation}</Text>
                    <Text ml=".75dvw" size={isMobile ? "4dvw" : "1.5dvw"}>Weapon: {damageData.weapon}</Text>
                    <Text ml=".75dvw" size={isMobile ? "4dvw" : "1.5dvw"}>Went through: {damageData.wentThrough.join(", ")}</Text>
                </Flex>
            }
        </Paper>
    );
}
