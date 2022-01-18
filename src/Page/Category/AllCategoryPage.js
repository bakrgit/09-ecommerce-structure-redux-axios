import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import baseUrl from './../../Api/baseURL';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
const AllCategoryPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const data = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    console.log(data)
    console.log(loading)
    
    return (
        <div style={{ minHeight: '670px' }}>

            <CategoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
