import React from 'react'
import {useGlobalContext} from './context'
import styled from 'styled-components';
const Search = () => {
    const { query , setQuery , isError , isLoading} = useGlobalContext();
 if(isLoading){
    return <div>loading</div>
 }else{
    return (
        <Wrapper>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="search"  onChange={(e) => setQuery(e.target.value)} />
            </form>
            <div className="error">
                <p >{isError.show && isError.msg}</p>
            </div>
        </Wrapper>
        )
 }
}
const Wrapper = styled.div`
    
`
export default Search