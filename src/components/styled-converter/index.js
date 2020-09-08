import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import {parseDiv} from '../../helpers/styled-helper';
import {  toast } from 'react-toastify';
import copy from '../../helpers/copy-to-clipboard';

const Main = styled.div`
    display: flex;
    justify-content: space-between;

    .column {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;  

        .MuiFormControl-root  {
            width: 100%;
            margin-bottom: 10px;
        }
    }
    
`;


export default function FixedContainer()
{
    const [out, setOut] = useState('');
    const [divName, setDivName] = useState('CustomDiv');
    const [usage, setUsage] = useState('');
    const [divInput, setDivInput] = useState(`<div 
    key={color.name}
    onClick={() => setSelectedColor(color)}
    style={{
        position: 'relative',
        display: 'flex',
        marginBottom: 8,
        cursor: 'pointer',
    }}>`);

    useEffect(() => {
        const parsed = parseDiv(divInput, divName);
        setOut(parsed.styledComponent);
        setUsage(parsed.usage);
        console.log(parsed)
    }, [divInput, divName])

    const onCopy = (event) => {
        const str = event.target.value;
        console.log('copy String', str);
        copy(str);
        toast(`Copied to clipboard: ${str}`);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>

                <Main>
                    <div className="column">
                        <TextField
                            id="divName"
                            label="name"
                            defaultValue={divName}
                            onChange={(event) => {
                                setDivName(event.target.value)                 
                            }}
                        />
                        <TextField
                            id="div-input"
                            label="div"
                            multiline
                            rows={20}
                            defaultValue={divInput}
                            variant="outlined"
                            onChange={(event) => {
                                console.log(event)
                                setDivInput(event.target.value)                 
                            }}
                        />
                    </div>
                        
                    <div className="column">
                        <TextField
                            id="style-output"
                            label="styled"
                            multiline
                            rows={10}
                            variant="outlined"
                            value={out}
                            contentEditable={false}
                            onClick={onCopy}
                        />   
                         <TextField
                            id="element-output"
                            label="usage"
                            multiline
                            rows={10}
                            variant="outlined"
                            value={usage}
                            contentEditable={false}
                            onClick={onCopy}
                        />   
                    </div>
                       
                </Main>
                
            </Container>
        </React.Fragment>
    );
}
