import React, { Component, Fragment } from 'react'
import Nav from '../Nav';
import Grid from '../Grid';
import { fetchPopularRepos } from '../../utils/api';
import Loading from '../../Loading';

export class Popular extends Component {
  state = {
    selectedLanguage: 'All',
    repos: {},
    error: null,
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  isLoading = () => {
    const { selectedLanguage, repos, error } = this.state;

    return !repos[selectedLanguage] && this.state.error === null
  }

  updateLanguage = (selectedLanguage) => {
    this.setState({
      selectedLanguage,
      error: null
    })

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          this.setState(({repos}) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data 
            }
        }))
      })
      .catch(() => {
        this.setState({
          error: `There was an error fetching the ${selectedLanguage} repos`
        })
      })
    }
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <Fragment>
        <Nav 
          selected={selectedLanguage} 
          onUpdateLanguage={this.updateLanguage}  
        />
        {this.isLoading() && <Loading />}
        <main>
          {repos[selectedLanguage] &&
            <Grid repos={repos[selectedLanguage]} />
          }
        </main>
      </Fragment>
    )
  }
}

export default Popular
