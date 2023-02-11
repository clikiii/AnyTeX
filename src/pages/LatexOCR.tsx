import React, { useState } from 'react';
import { Flex, Text, SystemStyleObject, Button, Radio, RadioGroup, Stack, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FileUploader } from "react-drag-drop-files";
import Axios from 'axios';

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import { BACKENDLINK } from '../const';
import BgHome from '../assets/images/background.jpg';


const fileTypes = ["JPG", "PNG", "JPEG"];
const reqTypes = {
    HAND_IMG: '0',
    PRINT_IMG: '1',
}

const OCRPage = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState<any>(null);
    const [type, setType] = useState<string>(reqTypes.HAND_IMG);
    const [hasFile, setHasFile] = useState<boolean>(false);
    const [ret, setRet] = useState<any>({file:"", latex:""});

    // NOTE: any type for temperate use
    const handleChange = (file: any) => {
        setFile(file);
        setHasFile(file);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        const headers={
            'Access-Control-Allow-Origin': '*',
            'Content-Type': file.type
        };

        formData.append('img', file, file.name);
        console.log("formdata", formData);

        if (type == reqTypes.HAND_IMG){
            Axios.post(`${BACKENDLINK}/hand`, formData, {headers: headers})
                .then((r) => {
                    console.log(r);
                })
        }
    }


    return (
        <>
            <Flex sx={styles.flex}></Flex>
            { hasFile &&
                <>
                    <Flex sx={styles.displayContainer}>
                        <Flex sx={styles.fileTrue}>
                            <Flex sx={styles.block}>
                                <Image boxSize='400px' src={ret.file} alt='Uploaded file' />
                            </Flex> 
                        </Flex>
                        <Flex sx={styles.latexTrue}>
                            <Flex sx={styles.block}>
                                <Latex>$e^+e^-$ $\\gamma\\gamma \\to W t\\bar b$.</Latex>
                            </Flex>
                        </Flex>
                    </Flex>
                </>
            }
            {/* <Flex sx={hasFile? styles.containerTrue : styles.containerFalse}> */}
            <Flex sx={styles.uploadContainer}>
                <Flex sx={styles.block}>
                    <Text sx={styles.title}>Upload Your Image</Text>
                    <RadioGroup onChange={setType} value={type} sx={ styles.radio }>
                        <Stack direction='row'>
                            <Radio colorScheme='green' value={reqTypes.HAND_IMG}>Hand-written</Radio>
                            <Radio colorScheme='green' value={reqTypes.PRINT_IMG}>Printed</Radio>
                        </Stack>
                    </RadioGroup>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                    <Flex sx={styles.fileInfo}>{file ? `File name: ${file.name}` : "no files uploaded yet"}</Flex>

                    <Button
                        colorScheme='green'
                        sx={styles.button}
                        onClick={() => handleSubmit()}
                    >
                        Upload Image
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

const styles: { [styleName: string]: SystemStyleObject } = {
    uploadContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0.5rem 2rem',
    },
    displayContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    fileTrue: {
        width: '45%',
        margin: '0.5rem 2rem',
        marginRight: '0.3rem',
    },
    latexTrue: {
        minWidth: '50%',
        margin: '0.5rem 2rem',
        marginLeft: '0.3rem',
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        minWidth: '45vw',
        paddingBottom: '2rem',
        padding: '1rem 5rem',
        borderRadius: '1rem',
    },
    flex: {
        width: 'full',
        height: '150vh',
        backgroundImage: BgHome,
        opacity: 0.5,
        position: 'absolute',
        top: -10,
        zIndex: -999,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        filter: 'blur(6px)',
    },
    title: {
        fontSize: '2xl',
        fontWeight: '600',
        margin: '1rem',
        color: 'green.700',
    },
    fileInfo: {
        fontSize: '15px',
        margin: '1rem',
        color: 'green.700',
    },
    radio: {
        margin: '1rem',
    }
};

export default OCRPage;
