import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from '../node_modules/react-mdl'
import axios from 'axios';
import PageContent from './components/PageContent';
import Search from './components/Search';

class App extends React.Component{
  constructor()
  {
    super();
    this.state = {
      jobs : [],
      tech : ''
    }
  }
  getTechType = (event) => {
    this.setState({
      tech: event.target.value
    })
  }
  searchData = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${this.state.tech}`)
    .then(res => {
      this.setState({
        jobs : res.data
      })
      // console.log(res.data)
    })
  }
  render(){
    return (
      <div>
        <Layout fixedHeader>
            <Header title={<span><span style={ {color: '#ddd' }}>Job Search</span></span>}>
            </Header>
            <Drawer title="About Me">
                <Navigation>
                    <a href="https://ritvikjain.me" target='_blank'>My Portfolio</a>
                    <a href="https://www.google.com">Github</a>
                    <a href="https://www.google.com">Linkdin</a>
                    <a href="https://www.google.com">Facebook</a>
                </Navigation>
            </Drawer>
            <Content> 
              <Search searchData = {this.searchData} getTechType={this.getTechType}></Search>
              <PageContent jobs={this.state.jobs}></PageContent>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
