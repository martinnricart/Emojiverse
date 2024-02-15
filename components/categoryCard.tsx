import * as React from 'react'

interface CategoryProps {
    emoji: string;
    group: string;
    handleFilter: (group: string) => void;
}

const CategoryCard: React.FunctionComponent<CategoryProps> = ({
    emoji,
    group,
    handleFilter
}) =>{
    return(
        <React.Fragment>
            <button
            onClick={()=> handleFilter(group)}
                className='flex items-baseline justify-start pl-7 rounded-md bg-gray-50 py-2 hover:bg-gray-100'
            >
            <span className='text-4xl md:text-5xl' role={'img'} aria-label={emoji}>
                {emoji}
            </span>
            <p>{group}</p>
            </button>
        </React.Fragment>
    )
}

export default CategoryCard