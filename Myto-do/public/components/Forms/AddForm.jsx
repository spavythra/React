import React from 'react';
import {Button, Input, Link, Spacer} from "@nextui-org/react";

function AddForm(props) {
    const {value, setValue, handleSave, handleClose, placeholder} = props;


    const handleKeypress = (e) => {
        if (e.key === 'Enter'){
            handleSave()
        }
    }
    const handleClick = (e) => {
        handleSave()
    }

    return (<>
        <div className='small_form'>
            <Input data-testid="input" ref={input => input && input.focus()} className={'editable_field'} onKeyPress={handleKeypress}
                   bordered value={value} color="white" maxLength={120} placeholder={placeholder} aria-label={placeholder}
                   onChange={(e) => setValue(e.target.value)}/>
            <Spacer y={0.5}/>
            <div>
                <Button color="#5c3eac" size="small" style={{textTransform: 'none'}} onClick={handleClick} auto>
                Add
                </Button>
                <Button color="#5c3eac" size="small" onClick={handleClose}
                        style={{borderWidth: 1, top: 1, marginLeft: 12}} auto>
                    Cancel
                </Button>
            </div>
        </div>
    </>);
}

export default AddForm;
