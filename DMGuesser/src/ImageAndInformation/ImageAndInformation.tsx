import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import damageData from "../DamageData/damageData";
import { Flex, Image, Paper, Text } from "@mantine/core";

export default function ImageAndInformation(damageData: damageData) {
    const [opened, { close, open }] = useDisclosure(false);
    const isMobile = useMediaQuery('(max-width: 1100px)')

    return (
        <Paper
            p={0}
            w={isMobile ? "80dvw" : "28dvw"}
            h={isMobile ? "43dvw" : "15dvw"}
            mb="25px"
            bg="rgba(0, 0, 0, 0)"
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <Image
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onClick={() => { opened ? close() : open() }}
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
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    onClick={() => { opened ? close() : open() }}
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
    )
}