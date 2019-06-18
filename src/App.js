import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from '../node_modules/react-mdl'
import axios from 'axios';
import PageContent from './components/PageContent';
import Search from './components/Search';
import './components/style.css';

class App extends React.Component{
  constructor()
  {
    super();
    
    
    this.state = {
      jobs : [],
      tech : '',
      location : '',
      spinnerDisp : '',
      page: 0
    }
  }
  getTechType = (event) => {
    this.setState({
      tech: event.target.value
    })
  }
  getLocation = (event) => {
    this.setState({
      location: event.target.value
    })
  }
  searchData = () => {
    if(this.state.tech === '' && this.state.location === '')
    {
      alert('Please Fill the required fields.');
    }else{
      this.setState({
        spinnerDisp: <div className='loader'></div>,
        page: 1
      })
      axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.tech}&location=${this.state.location}&page=${this.state.page}`)
      .then(res => {
        this.setState({
          spinnerDisp: ''
        })
        if(res.data.length === 0)
        {
          alert('No Jobs Found !!')
        }else{
          this.setState({
            jobs : res.data
          })
        }
      })
    }
  }
  nextPage = () =>{
    this.setState({
      jobs: [],
      spinnerDisp: <div className='loader'></div>,
      page: this.state.page + 1
    })
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.tech}&location=${this.state.location}&page=${this.state.page}`)
      .then(res => {
        this.setState({
          spinnerDisp: ''
        })
        if(res.data.length === 0)
        {
          alert('No Jobs Found !!')
          this.setState({
            page: 0
          })
        }else{
          this.setState({
            jobs : res.data
          })
        }
      })
  }
  prevPage = () =>{
    this.setState({
      jobs: [],
      spinnerDisp: <div className='loader'></div>,
      page: this.state.page - 1
    })
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.tech}&location=${this.state.location}&page=${this.state.page}`)
      .then(res => {
        this.setState({
          spinnerDisp: ''
        })
        if(res.data.length === 0)
        {
          alert('No Jobs Found !!')
          this.setState({
            page: 0
          })
        }else{
          this.setState({
            jobs : res.data
          })
        }
      })
  }
  render(){
    let page = (this.state.page === 0) ? '' : <div className='row flex-row justify-content-center p-3'>
    <button className='btn btn-outline-dark mx-3 btn-page' onClick={this.prevPage}>Prev</button>
    <h5 className='my-2'>{this.state.page}</h5>
    <button className='btn btn-outline-dark mx-3 btn-page' onClick={this.nextPage}>Next</button>
  </div>
    return (
      <div>
        <Layout fixedHeader>
            <Header  className='header' title={<span><span style={ {color: '#ddd' }}>Job Search</span></span>}>
            </Header>
            <Drawer title="About Me">
                <Navigation>
                    <a href="https://ritvikjain.me" target='_blank'>My Portfolio</a>
                    <a href="https://www.github.com/Ritvikjain">Github</a>
                    <a href="https://www.linkedin.com/in/ritvik-jain-a98a03152/">Linkdin</a>
                    <a href="https://www.facebook.com/ritvik.jain.1232">Facebook</a>
                </Navigation>
            </Drawer>
            <Content className='content'> 
              <Search searchData = {this.searchData} getTechType={this.getTechType} getLocation={this.getLocation}></Search>
              <div className='row justify-content-center flex-row p-3'>{this.state.spinnerDisp}</div>
              <PageContent jobs={this.state.jobs} openModal={this.openModal}></PageContent>
              {page}
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
