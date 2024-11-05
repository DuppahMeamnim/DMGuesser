import { Button, Paper } from "@mantine/core";

export default function MobileKeyboard({ onKeyPress }: { onKeyPress: (key: string) => void }) {
    const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter", "<-"]

    return (
        <Paper style={{
            width: "100%",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(0, 0, 0, 0)"
        }}>
            {keys.map((key) => (
                <Paper key={key}>
                    <Button
                        style={{
                            width: '7vw',
                            height: '7vw',
                            minWidth: '0',
                            minHeight: '0',
                            padding: '0',
                            fontSize: '2vw',
                            backgroundColor: "rgba(100, 10, 10, 1)",
                            border: 'none', // Remove the border
                        }}
                        radius={"0vw"}
                        onClick={() => onKeyPress(key)}>
                        {key}
                    </Button>
                </Paper>
            ))}
        </Paper>
    );
}
