import React,{Component} from 'react';
import {Container,Row,Col,Form,ButtonGroup,Button,Progress} from 'reactstrap';
import {CSSTransition} from 'react-transition-group';
import {AnimSend} from '../elements'
import {SendButton,InputSimple,InputOptions,WelcomeM} from '../forms/questTypes';
import '../../style/utils.css';
import '../../style/form.css';

const duration = 500
export default class ContactFormSt extends Component {
  constructor(props){
    super(props)
    this.state={
      allAnswers:false,
      progr:0,
      show:true,
      currentQ:0,
      // Questions

      web:'',
      nombre_empresa:'',
      nombre:'',
      apellidos:'',
      cargo:'',
      email:'',
      tel:'',
      solucion:'',

      // possible Q
      possibleQ:[
        {
            required:false,
            elType: 'WelcomeM',
            title:'¡Atrévete a crecer!',
            message: 'Hay una solución para el problema que tiene tu empresa, cuéntanos los retos de ella y recibe un diagnóstico completamente gratis de lo que puedes mejorar.   ',
            small:"Puedes pasar a la siguiente pregunta presionando tab",
            className:"text-center",
          },
        // {
        //   required:true,
        //   label: 'Persona física o moral',
        //   elType: 'ButtonCh',
        //   forL: 'tipoPersona',
        //   id: 'tipoPersona',
        //   name: 'tipoPersona',
        //   longQ: 'Eres empresa o individuo?',
        //   icon: 'users',
        //   sizeSM: [
        //     4, 8
        //   ],
        //   options: ['Moral', 'Física','Asociación Civil']
        // },
        // {
        //   label: '¿Cuántas facturas expides al mes?',
        //   elType: 'NumberPlusMin',
        //   forL: 'facturacion',
        //   id: 'facturacion',
        //   name: 'facturacion',
        //   longQ: 'Aproximadamente',
        //   min:1,
        //   icon: 'clock',
        //   sizeSM: [
        //     6, 6
        //   ],
        //   // ifPlusText: '50 o más',
        //   // plusIcon: 'fas fa-plus-square',
        //   // nameOption: 'plus50'
        // }, {
        //   label: '¿Cuántos trabajadores?',
        //   elType: 'OptionalPlusMin',
        //   type: 'range',
        //   forL: 'seguridad',
        //   id: 'seguridad',
        //   name: 'seguridad',
        //   longQ: 'Exactamente',
        //   min:1,
        //   rango: [
        //     1, 50
        //   ],
        //   icon: 'clock',
        //   sizeSM: [
        //     4, 8
        //   ],
        //   questionText: '¿Necesitas seguridad social?',
        //   plusIcon: 'fas fa-plus-square',
        //   nameIf: "segReq"
        // }, {
        //   required:[false,false,false],
        //   title:'¿Necesitas servicios adicionales?',
        //   label:['Licitaciones','Trámite de licencias','Cursos'],
        //   elType:'MultCheckboxes',
        //   type:'checkbox',
        //   forL:['licitacion','licencias','cursos'],
        //   id:['licitacion','licencias','cursos'],
        //   name:['licitacion','licencias','cursos'],
        //   icon:'fas fa-plus-square',
        //   sizeSM:[4]
        // }, {
        //   required:[false,false,false],
        //   title:'¿Necesitas servicios adicionales?',
        //   label:['Auditorías','Regulzarización','Declaraciones anuales'],
        //   elType:'MultCheckboxes',
        //   type:'checkbox',
        //   forL:['auditoria','regularizacion','declaracion'],
        //   id:['auditoria','regularizacion','declaracion'],
        //   name:['auditoria','regularizacion','declaracion'],
        //   icon:'fas fa-plus-square',
        //   sizeSM:[4]
        // },
        // {
        //   label:'¿Otros servicios adicionales?',
        //   elType:'InputSimple',
        //   type:'text',
        //   forL:'otrosServ',
        //   id:'otrosServ',
        //   name:'otrosServ',
        //   longQ:'Servicios adicionales separados con coma',
        //   icon:'fas fa-plus-square',
        //   sizeSM:[4,8]
        // },
        {
          required:true,
          label:'Nombre comercial',
          type:'text',
          elType:'InputSimple',
          forL:'nombre_empresa',
          id:'nombre_empresa',
          name:'nombre_empresa',
          longQ:'El que usa comercialmente la empresa',
          icon:'building',
          sizeSM:[4,8]
        },
        {
          required:true,
          label:'Sitio web',
          type:'text',
          elType:'InputSimple',
          forL:'web',
          id:'web',
          name:'web',
          longQ:'Sitio web de la empresa',
          icon:'sitemap',
          sizeSM:[4,8]
        },
        {
          required:true,
          label:'Nombre',
          type:'text',
          elType:'InputSimple',
          forL:'nombre',
          id:'nombre',
          name:'nombre',
          longQ:'Sólo nombre sin apellidos',
          icon:'user-astronaut',
          sizeSM:[4,8]
        },
         {
          required:false,
          label:'Apellidos',
          type:'text',
          elType:'InputSimple',
          forL:'apellidos',
          id:'apellidos',
          name:'apellidos',
          longQ:'Sólo apellidos',
          icon:'user-astronaut',
          sizeSM:[4,8]
        },
        {
          label: 'Correo electrónico',
          elType: 'InputSimple',
          type:'email',
          forL: 'email',
          id: 'email',
          name: 'email',
          longQ: 'Correo electrónico',
          //eslint-disable-next-line
          regExp:/@/,
          valid:true,
          required:true,
          invalid:true,
          feedback:'Ingresa un correo válido',
          icon: 'at',
          sizeSM: [5, 7]
        },
        {
          label:'Puesto',
          type:'text',
          elType:'InputSimple',
          forL:'cargo',
          id:'cargo',
          name:'cargo',
          longQ:'Puesto dentro de la empresa',
          icon:'briefcase',
          sizeSM:[4,8]
        },
        // {
        //   label:'Área de interés',
        //   type:'select',
        //   elType:'InputOptions',
        //   forL:'interes',
        //   id:'interes',
        //   name:'interes',
        //   longQ:'Selecciona el área',
        //   icon:'at',
        //   sizeSM:[4,8],
        //   options:[
        //     'Preparatoria',
        //     'Lic. en Podología',
        //     'Lic. en Derecho',
        //     'Lic. en Admón de empresas',
        //     'Lic. en Contaduria Pública',
        //     'Maestría',
        //   ]
        // },
        {
          required:true,
          label:'Número de contacto',
          type:'text',
          elType:'InputSimple',
          forL:'tel',
          id:'tel',
          name:'tel',
          valid:true,
          invalid:true,
          regExp:/^\d{10}$/,
          pattern:'[0-9]{10}',
          limit:10,
          longQ:'Teléfono a 10 dígitos p.ej. 1234567890',
          icon:'phone',sizeSM:[4,8]
        },
        {
        label:'Qué solución ofreces',
        type:'textarea',
        elType:'InputSimple',
        forL:'solucion',
        id:'solucion',
        name:'solucion',
        longQ:'Comentarios',
        icon:'truck-pickup',
        sizeSM:[4,8]
      },
        // {
        //   elType:'SendButton',
        //   textButton:'Enviar',
        //   sizeSM:[4,8]
        // }
        // {
        //   label:'Empresa o nombre comercial',
        //   type:'text',
        //   elType:'InputSimple',
        //   forL:'empresa',
        //   id:'empresa',
        //   name:'empresa',
        //   longQ:'Sólo si aplica',
        //   icon:'building',
        //   sizeSM:[4,8]
        //   }, {
        //   elType:'SummaryEl',
        //   title:'Tus datos'
        //   }
      ]
    }
  }
  componentDidMount=()=>{
    // console.log(process.env)
    // this.switcher = setInterval(()=>{
    //   this.setState({
    //     show:!this.state.show
    //   })
    // }, 1200)
    if(process.env.REACT_APP_PREFILLED_DATA){
      this.setState({
        web:'tribu.mx',
        nombre_empresa:'Tribu',
        nombre:'Grecia',
        apellidos:'Zurita',
        cargo:'Directora General',
        email:'luiscasillas@n12.mx',
        tel:'2222222222',
        solucion:'Cosas chingonas',

      })
    }
  }
  componentDidUpdate=(prevProps,prevState,snapshot)=>{
    if(prevState.currentQ!==this.state.currentQ){
      this.setState({
        show:true
      },this.toggleShow)
    }
    // if(prevProps.today_format!==this.props.today_format){
    //   const {possibleQ} = this.state
    //   let rango=[`${this.props.today_format}`,'']
    //   let newPQ = [...possibleQ.slice(0,2),{...possibleQ[2],rango},...possibleQ.slice(3)]
    //   this.setState({
    //     possibleQ:newPQ
    //   })
    // }
  }
  componentWillUnmount=()=>{
    // clearTimeout(this.switcher)
  }
  endAnim=()=>{
    this.setState({
      showMessage:true
    })
    this.props.cancel_request()
  }
  toggleShow=()=>{
    setTimeout(()=>{
      this.setState({
        show:!this.setState.show
      })
    }, duration)

  }
  getValue=(e,add,min)=>{
    const target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(add===true){
      value = value + 1
    } else if (add===false){
      value = value - 1
      if(min && value <= (min-1)) value = min
    }
    this.setState({
      [name]: value
    });
  }
  setProgress=()=>{
    const {currentQ,possibleQ} = this.state
    let progr = ((currentQ)*100)/(possibleQ.length-1)
    if(currentQ===0) progr=0
    if(currentQ===possibleQ.length) progr=100
    this.setState({
      progr
    })
  }
  keyHandler=(e)=>{
    if(e.key==='Tab'||e.key==='Enter'){
      if(this.timer) return clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        this.changePossibleQ(true,e)
      },5000)
    }
    // else if (e.key==='ArrowLeft'){
    //   this.changePossibleQ(false)
    // }
  }
  changePossibleQ=(d,e)=>{
    const {currentQ,possibleQ} = this.state
    if(e)e.preventDefault()
    let valid = true
    if(possibleQ[currentQ].required
      &&this.state[possibleQ[currentQ].name]===''){
      valid = false
    } else if(possibleQ[currentQ].regExp){
      const testR = new RegExp(possibleQ[currentQ].regExp)
      valid = testR.test(this.state[possibleQ[currentQ].name])
    } else if(!possibleQ[currentQ].required) {
      valid = true
    }

    let index = currentQ
    if(d&&valid){
      if(index!==possibleQ.length-1){
      index++
      this.setState({
        currentQ:index,
        show:!this.state.show
      },this.setProgress)
    }

    } else if (!d) {
      if(index===0)index=possibleQ.length
      index--
      this.setState({
        currentQ:index,
        show:!this.state.show
      },this.setProgress)
    }
  }
  setPossibleQ=(x)=>{
    this.setState({
      currentQ:x,
      show:!this.state.show
    })
  }
  // renderQuestions=()=>{
  //   const {possibleQ,currentQ,show} = this.state,
  //         {longQ} = possibleQ[currentQ]
  //   return(
  //     <CSSTransition classNames="question"
  //                    key={currentQ}
  //                    in={show}
  //                    onExited={this.toggleShow}
  //                    unmountOnExit
  //                    timeout={300}>
  //       <h3 className="mainQ">{longQ}</h3>
  //      </CSSTransition>
  //   )
  // }
  startSend=()=>{
    const {
      web,
      nombre_empresa,
      nombre,
      apellidos,
      cargo,
      email,
      tel,
      solucion,
    }=this.state
    const info = {web,nombre_empresa,nombre,apellidos,cargo,email,tel,solucion,startup:true}
    this.props.postDataLead(info)
  }
  renderProgress=()=>{
    const {possibleQ,currentQ} = this.state
    const progrQ = possibleQ.slice(0,currentQ)
    let progrV = 100/possibleQ.length
    return(
      <Progress multi>
         {progrQ.map((el,i)=>
            <Progress value={progrV} bar>
              {this.state[el.name]}
            </Progress>
         )}
      </Progress>
    )
  }
  renderInputs=()=>{
    const {possibleQ,currentQ,show} = this.state
    const {name,elType,rango,className} = possibleQ[currentQ]
    return(
      <CSSTransition classNames="question"
                     key={currentQ}
                     in={show}
                     onExited={this.toggleShow}
                     unmountOnExit
                     timeout={duration}>
        <div>



          {elType==='InputSimple'
          &&<InputSimple
            getValue={this.getValue}
            value={this.state[name]}
            currentQ={currentQ}
            rango={rango}
            charact={possibleQ[currentQ]}/>}
          {elType==='SendButton'
          &&<SendButton
            setSend={this.startSend}
            charact={possibleQ[currentQ]}/>}
          {elType==='InputOptions'
          &&<InputOptions
            getValue={this.getValue}
            value={this.state[name]}
            currentQ={currentQ}
            rango={rango}
            charact={possibleQ[currentQ]}/>}
          {elType==='WelcomeM'
          &&<WelcomeM
             info={possibleQ[currentQ]}
              className={className}/>}


        </div>
       </CSSTransition>
    )
  }
  render(){
    const {isPosting,message,error} = this.props
    const {progr,possibleQ,currentQ,showMessage} = this.state
    return (
      <Container onKeyUp={this.keyHandler} autoFocus className="d-flex flex-column justify-content-center py-5">
            <Row className="my-4 mainQuestions align-items-center justify-content-center">
            <Col sm={isPosting&&6}>
              {!isPosting&&!message&&!error
                ?<Form onSubmit={(event)=>this.changePossibleQ(true,event)}>
                  {this.renderInputs()}
                </Form>
                :showMessage
                ?<h3 className="text-center">
                  {message
                    ?message.toString()
                    :error
                    ?error.toString()
                    :null
                  }
                </h3>
                :null
              }
              {isPosting&&<AnimSend endAnim={this.endAnim}/>}
            </Col>
          </Row>
          <Row className="my-4">
            <Col className="d-flex justify-content-center">
              <ButtonGroup>
                  <Button onClick={()=>this.changePossibleQ(false)}
                    disabled={currentQ===0}
                    color="info"
                    className="animated slideInLeft">
                    <i className="fas fa-chevron-left"/> Anterior
                  </Button>
                  {currentQ===possibleQ.length-1
                    ?<Button onClick={this.startSend}
                              color="info"
                              disabled={isPosting}
                              className="animated slideInRight">
                          Enviar <i className="fas fa-paper-plane"/>
                      </Button>
                      :<Button onClick={()=>this.changePossibleQ(true)}
                              disabled={currentQ===possibleQ.length-1}
                              color="info"
                              className="animated slideInRight">Siguiente <i className="fas fa-chevron-right"/>
                      </Button>
                  }

              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Progress value={progr}/>
            </Col>
          </Row>
      </Container>
    )
  }
}
