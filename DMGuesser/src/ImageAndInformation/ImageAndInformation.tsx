import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import damageData from "../DamageData/damageData";
import { Image, Paper, Popover } from "@mantine/core";

export default function ImageAndInformation(damageData: damageData) {
    const [opened, { close, open }] = useDisclosure(false);
    const isMobile = useMediaQuery('(max-width: 1100px)')

    return (
        <Popover
            width={200}
            position="right"
            offset={-200}
            opened={opened}
            radius={15}>
            <Popover.Target>
                <Image
                    onMouseEnter={open}
                    onMouseLeave={close}
                    radius={15}
                    w={isMobile ? "80vw" : "30vw"}
                    mb="25px"
                    fit="cover"
                    src={damageData.image}
                />
            </Popover.Target>
            <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                <Paper
                    h={225}>
                    {`Distance: ${damageData.distance}`} <br /><br />
                    {`Hit at: ${damageData.hitLocation}`}<br /><br />
                    {`Weapon: ${damageData.weapon}`} <br /><br />
                    {`Went through: ${damageData.wentThrough}`}
                </Paper>
            </Popover.Dropdown>
        </Popover>
    )
}