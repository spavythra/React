import React, {useRef, useState} from 'react';
import TextEditable from "../TextEditable";
import {Delete, MoreSquare, PaperFail, Setting, Swap,InfoCircle, TickSquare,CloseSquare,Filter2} from "react-iconly";
import {Link, Tooltip} from "@nextui-org/react";
import {connect} from "react-redux";
import {appTitleSelector} from "../../store/CommonStore/CommonSelectors";
import {updateAppTitle} from "../../store/CommonStore/CommonActions";
import DropDown from "../Common/DropDown";
import {useOpen} from "../../Hooks/hook";
import {deleteAllDone, setAppFilters} from "../../store/TodoStore/TodoActions";
import { render } from "react-dom";
import {BrowserRouter as Router, Switch,Routes , Route,Fragment} from 'react-router-dom';

function ActionBar({updateAppTitle, app_title, setAppFilters, deleteAllDone}) {
    const settingRef = useRef()
    const filterRef = useRef()
    const {open, setOpen} = useOpen()
    const [filterOpen, setFilterOpen] = useState(false)

    /* Dropdown Props */
    const marginPos = 225;
    const top = 70;
    const filterMarginPos = 189;
    const filterTop = 70;
    const settingsList = [
        {
            name: 'Delete completed',
            icon: <CloseSquare set="bold"/>,
            onClick: () => deleteAllDone()
        },
        
    ]
    const filterList = [
        {
            name: 'View all tasks',
            icon: <MoreSquare set="bold"/>,
            onClick: () => setAppFilters(null)
        },
        {
            name: 'View pending tasks',
            icon: <PaperFail set="curved"/>,
            onClick: () => setAppFilters(false)
        },
        {
            name: 'View completed tasks',
            icon: <TickSquare set="curved"/>,
            onClick: () => setAppFilters(true)
        }
    ]

    const handleFilter = () => {
        setFilterOpen(true)
    }
    return (<>
        <header className="content_header">
            <div className="content_header--content">
                <TextEditable isLarge={true} content={app_title} setStore={updateAppTitle}/>

                <div className="content_header--action">
                    <button ref={filterRef} type="button" className="btn icon-button" aria-label="Sorting options menu" disabled={filterOpen}
                            onClick={handleFilter}>
                        <Filter2 set="bold"/>
                        <span className="action_label">Filter</span>
                    </button>

                    <Tooltip content= "Author : Pavithra Subramaniyam. " color="#282828" placement='bottom' style={open ? {pointerEvents: 'none'}: null}>
                        
                    </Tooltip>

                    <Tooltip content="More actions" color="#282828" placement='bottom' style={open ? {pointerEvents: 'none'}: null}>
                        <button type="button" onClick={() => deleteAllDone()}
                                className="btn icon-button" aria-label="Sorting options menu">
                            <CloseSquare set="bold"/><span className="action_label">Delete completed  tasks</span>
                        </button>
                    </Tooltip>
                    
                    <DropDown menuList={settingsList} marginPos={marginPos} top={top} open={open}
                               setOpen={setOpen} buttonRef={settingRef}/>
                   <DropDown menuList={filterList} marginPos={filterMarginPos} top={filterTop} open={filterOpen}
                               setOpen={setFilterOpen} buttonRef={filterRef}/>
                </div>
            </div>
        </header>
    </>);
}

export default connect(
    (state) => ({
        app_title: appTitleSelector(state)
    }),
    (dispatch) => ({
        updateAppTitle: title => dispatch(updateAppTitle(title)),
        deleteAllDone: state => dispatch(deleteAllDone(state)),
        setAppFilters: state => dispatch(setAppFilters(state))
    })
)(ActionBar)
