import React from 'react';
import DailyList from '../components/DailyList';
import SearchBar from '../components/SearchBar';
import { deleteNote, getAllNotes } from '../utils/local-data';
import { useSearchParams } from 'react-router-dom';


function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}
 
class HomePage extends React.Component {
  constructor(props) {
    super(props);

     this.state = {
      dailies : getAllNotes(),
      keyword: props.defaultKeyword || '',
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
 
  onDeleteHandler(id) {
    deleteNote(id);
 
    // update the contact state from data.js
    this.setState(() => {
      return {
        dailies : getAllNotes(),
      }
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });
     this.props.keywordChange(keyword);
  }
 
  render() {
    // const dailies = this.state.dailies.filter((Daily) => {
    //   return Daily.name.toLowerCase().includes(
    //     this.state.keyword.toLowerCase()
    //   );
    // });

    const dailies = this.state.dailies.filter((Daily) => {
      return Daily?.name?.toLowerCase().includes(this.state.keyword.toLowerCase());
    });


    return (
      <section>
        <h2>Daftar </h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <DailyList dailies={dailies} onDelete={this.onDeleteHandler} />      
      </section>
    )
  }
}
 
// export default HomePage;  
export default HomePageWrapper;