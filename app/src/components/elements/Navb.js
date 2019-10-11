import React from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo_bs from '../../assets/img/logo/logo_alt.svg';
import logo_bs_b from '../../assets/img/logo/logoB_n.svg';
import logo_bs_wh from '../../assets/img/logo/logo_alt_wh.svg';
import logo_bs_b_wh from '../../assets/img/logo/logoB_wh.svg';

import '../../style/navb.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      below:false,
    };
  }
  componentDidMount=()=>{
    window.addEventListener('scroll',this.checkOffset)
  }
  componentWillUnmount=()=>{
    window.removeEventListener('scroll',this.checkOffset)
  }
  checkOffset=()=>{
  // this.props.getOffsetY(window.scrollY)
    if(window.scrollY>15){
      this.setState(()=>({
        below:true
      }))
    } else {
      this.setState(()=>({
        below:false
      }))
    }
  }
  toggle=()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {location} = this.props
    const {below} = this.state
    return (
      <div>
        <Navbar className={`navb ${below?'is_below':''} ${location==='/b'?'b_side':''}`} fixed="top"
                light={location==='/b'}
                dark={location==='/'}
                expand="md">
          <NavbarBrand tag={Link} to="/">
            <img className={`img-fluid logo logo_left ${below?'d-block':'d-none'}`}
                 width="100%" src={location==='/b'?logo_bs:logo_bs_wh} alt=""/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="#mision">Misión</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#challenges">#Challenges</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#oportunidad">Oportunidad</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#exitos">Casos de éxitos</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="#comunidad">Comunidad</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <NavbarBrand tag={Link} to="/b">
            <img className={`img-fluid logo logo_left ${below?'d-block':'d-none'}`}
            width="100%" src={location==='/b'?logo_bs_b:logo_bs_b_wh} alt=""/>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
