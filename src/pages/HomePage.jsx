import React from 'react';
import DailyList from '../components/DailyList';
import SearchBar from '../components/SearchBar';
// import { deleteNote, getAllNotes } from '../utils/local-data';
import { deleteNote, getActiveNotes } from '../utils/network-data';
import { useSearchParams, Link } from 'react-router-dom';
import { IoAddCircle   } from "react-icons/io5";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}
 
class HomePage extends React.Component {
  constructor(props) {
    super(props);

     this.state = {
      dailies : [],
      keyword: props.defaultKeyword || '',
      initializing: true,
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
 
   async componentDidMount() {
    const result = await getActiveNotes();
    if (!result.error) {
      this.setState({
        dailies: result.data,
        initializing: false,
      });
    }
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    const result = await getActiveNotes();
    if (!result.error) {
      this.setState({ dailies: result.data });
    }
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
    
    const dailies = this.state.dailies.filter((Note) => {
      return Note?.title?.toLowerCase().includes(this.state.keyword.toLowerCase());
    });


    return (
      <section>
        <div className="daftar">
          <h2 className='daftar_item' >Daftar</h2>
          <Link to="/notes/new" className='daftar-item__add'>
            <IoAddCircle />
          </Link>
        </div>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <DailyList dailies={dailies} onDelete={this.onDeleteHandler} />      
      </section>
    )
  }
}
 
// export default HomePage;  
export default HomePageWrapper;