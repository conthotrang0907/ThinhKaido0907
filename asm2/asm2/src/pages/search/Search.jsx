import React from 'react';
import Navbar from '../../component/header/Navbar';
import SearchForm from '../../component/searchForm/SearchForm';
import ResultList from './../../component/resultList/ResultList';
const Search = () => {
	return (
		<div className='app search'>
			<Navbar></Navbar>
			<SearchForm></SearchForm>
			<ResultList></ResultList>
		</div>
	);
};

export default Search;
