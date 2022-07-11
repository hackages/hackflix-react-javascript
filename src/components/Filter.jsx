
export function Filter(props) {

    return (
        <ul className='flex justify-center bg-gray-900 ease-in-out'>
            {props.items.map(category => <li className='px-3 py-3 cursor-pointer hover:bg-red-700 duration-200 ' > {category.name}</li>)
            }
        </ul >
    )
}