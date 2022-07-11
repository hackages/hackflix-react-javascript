import { useContext } from "react"
import { AppContext } from "../context/AppProvider"

export function Filter(props) {

    const context = useContext(AppContext)


    return (
        <ul className='flex justify-center bg-gray-900 ease-in-out'>
            {props.items.map(category => <li onClick={() => props.selectFilter(category.name)} className={`px-3 py-3 cursor-pointer hover:bg-red-700 duration-200 ${context.selectedCategory === category.name ? 'bg-red-700' : ''}`} > {category.name}</li>)
            }
        </ul >
    )
}
