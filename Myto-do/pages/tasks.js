import React from 'react'
import TodosApp from "../public/components/TodosApp";
import ViewTask from '../public/components/ViewTask';
import Todos from '../public/components/ViewTask';
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function tasks(props) {
    const {todos} = props;
    const handleShowTodo = () => {
        console.log("add");
    }
    console.log(todos)
    return (<>
        <div>
            <ViewTask/>
        </div>
        
    </>)

}


