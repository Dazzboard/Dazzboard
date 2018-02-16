
// DEMO
import GoogleMapReact from 'google-map-react'

import jsonp from 'jsonp'
import assign from 'object-assign'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'

import Layout from './GlobalLayout'
import Card from './Card'
import Header from './Header'
import { colors, gradients } from './styles'
import DashGroup from './DashGroup'
import DashList from './DashList'
import Dash from './Dash'
import Board from './Board'

class App extends React.Component {
  constructor () {
    super()
    this.state = assign(
      {},
      {
        drawerOpen: false,
        repo: {}
      }
    )
    this.toggle = this.toggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount () {
    jsonp('https://api.github.com/repos/jxnblk/rebass', (err, response) => {
      this.setState({ repo: response.data })
      console.log(response.data)
    }).bind(this)
  }


  render () {
    const sx = {
      app: {
        width: '100%',
        maxWidth: '2800px',
        borderRadius: '4px',
        paddingTop: '5px',
        paddingBottom: '5px',
        boxShadow: '0 6px 20px 0 rgba(37, 45, 71, 0.34)',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: '99',
        color: colors.lighter,
        backgroundColor: colors.dashboardBgDarker,
      }
    }
    const {
      drawerOpen,
      repo
    } = this.state

    return (
      <Layout>
        <div style={sx.app}>
          <Header />
          <Board>
            <Flex width={[1, 1, 1, 1/4]} height='100%' direction='column'>
              <Card background={gradients.fire} title='Compiler Status' data='Idle' text='done in 0.249 sec'  />
              <Card background={gradients.berry} title='Errors and Warnings' data='0' text='and no warnings' />
              <Card background={gradients.evening} title='Total Asset Size' data='6.23 MB' />
            </Flex>
            <Dash width={[1, 1, 1, 1/2]}>
              <GoogleMapReact
                      style={{height: '100%'}}
                      bootstrapURLKeys={{key: 'AIzaSyAgy7hEbpa5f6db4beN2kycYR5TBu-jzro'}}
                      center={{lat: 59.95, lng: 30.33}}
                      zoom={11}
              />
            </Dash>
            <DashList width={[1, 1, 1, 1/4]}>
              <Dash
                title='dist/components/Script.js'
                data='0 CHUNKS, 1.08 KB'
                badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
              </Dash>
              <Dash
                title='Hello'>
                ayyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                byyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                cyyo, World!
                {repo.name}
              </Dash>
              <Dash>
                HELLO, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                ayyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                byyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                cyyo, World!
                {repo.name}
              </Dash>
              <Dash>
                HELLO, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                ayyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                byyo, World!
                {repo.name}
              </Dash>
              <Dash>
                HELLO, World!
                {repo.name}
              </Dash>
            </DashList>
          </Board>
          <Board>
            <DashGroup width={[1, 1, 1, 1/2]}>
              <Dash
                title='dist/components/Script.js'
                data='0 CHUNKS, 1.08 KB'
                badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
              </Dash>
              <Dash
                title='Hello'>
                ayyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                byyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                cyyo, World!
                {repo.name}
              </Dash>
              <Dash>
                HELLO, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                ayyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                byyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                cyyo, World!
                {repo.name}
              </Dash>
              <Dash>
                HELLO, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                ayyo, World!
                {repo.name}
              </Dash>
              <Dash
                title='Hello'>
                byyo, World!
                {repo.name}
              </Dash>
              <Dash>
                HELLO, World!
                {repo.name}
              </Dash>
            </DashGroup>
          </Board>

        </div>
      </Layout>
    )
  }
}

export default App
 