import React from 'react';
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
    const {below} = this.state
    return (
      <div>
        <Navbar className={`navb ${below?'is_below':''}`} fixed="top" light expand="md">
          <NavbarBrand href="/">
            <img className={`img-fluid logo logo_left ${below?'d-block':'d-none'}`} width="100%" src={logo_bs} alt=""/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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
          <NavbarBrand href="/">
            <img className={`img-fluid logo logo_left ${below?'d-block':'d-none'}`} width="100%" src={logo_bs_b} alt=""/>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
