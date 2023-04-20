import React, { useCallback, useState } from 'react';
import { Input, InputGroup } from 'rsuite';
import { Edit, Close, Check } from '@rsuite/icons';
import { ToastContainer, toast } from 'react-toastify';


const EditableInput = ({ initialValue, onSave, label = null, placeholder = "Write your Value", onEmptyMsg = "Input is empty", ...inputProps }) => {

    const [input, setInput] = useState(initialValue);
    const [isEditable, setIsEditable] = useState(false);

    const onInputChange = useCallback((value) => {
        setInput(value);
    }, []);

    const onSaveClick = async () => {
        const trimmedValue = input.trim();
        if (trimmedValue === '') {
            toast.info("Lorem ipsum dolor");
        }

        if (trimmedValue !== initialValue) {
            await onSave(trimmedValue);
        }

        setIsEditable(true);
    };


    const onEditClick = useCallback(() => {
        setIsEditable(p => !p);

        setInput(initialValue)

    }, []);

    return (
        <div>
            <ToastContainer />
            {label}
            <InputGroup>
                <Input {...inputProps} placeholder={placeholder} disabled={isEditable} value={input} onChange={onInputChange} />
                <InputGroup.Button onClick={onEditClick} >
                    {!isEditable ? <Close /> : <Edit />}
                </InputGroup.Button>
                {!isEditable && (<InputGroup.Button onClick={onSaveClick}>
                    <Check />
                </InputGroup.Button>)}
            </InputGroup>
        </div>
    )
}

export default EditableInput