import React from 'react'
import TodosApp from "../public/components/TodosApp";

export default function Home() {
    const handleAddTodo = () => {
        console.log("add");
    }
    return (<>
        <TodosApp/>
        
    </>)
}
