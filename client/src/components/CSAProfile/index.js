import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class CSAProfile extends React.Component {
  constructor(){
    super()
    this.state = {
      tab: 0
    }
  }
  handleTab = (event, value) => {
    this.setState({tab: value})
  }
  render(){
    const { tab } = this.state
    return(
      <div>
        Perfil da CSA
        <Tabs value={tab} onChange={this.handleTab}>
          <Tab label={"Sobre"} key={0}/>
          <Tab label={"Gestão"} key={1}/>
          <Tab label={"Outra"} key={2}/>
        </Tabs>
        { tab === 0 && <span>Sobre</span> }
        { tab === 1 && <span>Gestao</span>}
        { tab === 2 && <span>Outra</span> }
      </div>
    )
  }
}

export default CSAProfile
