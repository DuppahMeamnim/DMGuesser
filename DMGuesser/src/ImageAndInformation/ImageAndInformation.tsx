import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import damageData from "../DamageData/damageData";
import { Flex, Image, Paper, Text } from "@mantine/core";

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
            <Image
                onClick={() => { opened ? close() : open() }}
                radius={15}
                width="100%"
                height="100%"
                fit="fill"
                src={damageData.image}
            />
            {
                opened &&
                <Flex
                    onClick={() => { opened ? close() : open() }}
                    w={isMobile ? "80vw" : "28vw"}
                    h={isMobile ? "43vw" : "15vw"}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                    <Text ml=".75vw" size={isMobile ? "4vw" : "1.5vw"}>Hit at: {damageData.hitLocation}</Text>
                    <Text ml=".75vw" size={isMobile ? "4vw" : "1.5vw"}>Weapon: {damageData.weapon}</Text>
                    <Text ml=".75vw" size={isMobile ? "4vw" : "1.5vw"}>Went through: {damageData.wentThrough.join(", ")}</Text>
                </Flex>
            }
        </Paper>
    )
}