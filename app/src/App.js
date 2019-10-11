import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {Landing,LandingB} from './components/routes';
import {Navb} from './components/elements'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCoffee,
  faAt,
  faBriefcase,
  faUserAstronaut,
  faPhone,
  faTruckPickup,
  faSitemap,
  faBuilding,
  faChevronLeft,
  faChevronRight,
  faPaperPlane

} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

library.add(fab,
  faCheckSquare,
  faCoffee,
  faAt,
  faBriefcase,
  faUserAstronaut,
  faPhone,
  faTruckPickup,
  faSitemap,
  faBuilding,
  faChevronLeft,
  faChevronRight,
  faPaperPlane

)

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    const {location} = this.props
    return (
      <main className="App">
          <div>
            <Navb location={location.pathname}/>
            <TransitionGroup>
              <CSSTransition key={location.pathname}
                             timeout={300}
                             classNames={`slideTranslate_${location.pathname==='/b'?'left':'right'}`}
                             mountOnEnter={true}
                             unmountOnExit={true}
                             >
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/b" component={LandingB}/>
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
      </main>
    );
  }
}
