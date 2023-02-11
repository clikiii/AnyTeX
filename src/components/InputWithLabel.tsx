import React from "react";

import {
    Text,
    Input,
    SystemStyleObject
} from "@chakra-ui/react";

interface InputProps {
    label: string;
    placeholder: string;
    variant: string
}

const InputWithLabel = (({ label, placeholder, variant }: InputProps) => {

    if (variant === "inline") {
        return (
            <>
                <Text>{label}:</Text>
                <Input variant="flushed" placeholder={placeholder} />
            </>
        );
    }
    else if (variant === "seperate") {
        return (
            <>
                <Text sx={styles.text}>{label}:</Text>
                <Input variant="flushed" placeholder={placeholder} sx={styles.input} />
            </>
        );
    }

});

const styles: { [s: string]: SystemStyleObject } = {
    text: {
        float: "left", 
        m: "1rem",
    },
    input: {
        float: "left", 
        width: "70%",
        m: "0.5rem",
    },
}

export default InputWithLabel;