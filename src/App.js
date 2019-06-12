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
      spinner : false,
      spinnerDisp : ''
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
        spinnerDisp: <div className='loader'></div>
      })
      axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.tech}&location=${this.state.location}`)
      .then(res => {
        this.setState({
          spinnerDisp: ''
        })
        if(res.data.length === 0)
        {
          alert('No Jobs Found !!')
        }else{
          this.setState({
            jobs : res.data,
          })
        }
      })
    }
  }
  render(){
    return (
      <div>
        <Layout fixedHeader>
            <Header  className='header' title={<span><span style={ {color: '#ddd' }}>Job Search</span></span>}>
            </Header>
            <Drawer title="About Me">
                <Navigation>
                    <a href="https://ritvikjain.me" target='_blank'>My Portfolio</a>
                    <a href="https://www.google.com">Github</a>
                    <a href="https://www.google.com">Linkdin</a>
                    <a href="https://www.google.com">Facebook</a>
                </Navigation>
            </Drawer>
            <Content className='content'> 
              <Search searchData = {this.searchData} getTechType={this.getTechType} getLocation={this.getLocation}></Search>
              <div className='row justify-content-center flex-row p-3'>{this.state.spinnerDisp}</div>
              <PageContent jobs={this.state.jobs}></PageContent>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
