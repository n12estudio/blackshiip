import {Lead} from '../models';
import {transporter} from '../config/mail'
import {TEMPLATES,ADMIN_MAIL} from '../constants'

export const list_leads = async (req,res,next)=>{
  try {
    const leads = await Lead.find()
    res.status(200).json(leads)

  } catch(error){
    next(error);
  }
}

export const get_lead = async (req,res,next)=>{
  const {params:{lead_id}} = req
  try {
    const lead = await Lead.findById(lead_id)
    res.status(200).json(lead)
  } catch(error){
    next(error)
  }
}

export const create_lead= async(req,res,next)=>{
  const {body} = req
  try {
    const new_lead = await new Lead(body).save();
    let mail_options = {
            to: body.email,
            subject: 'Registro',
            context: body,
            template: body.startup?TEMPLATES.LEAD_A:TEMPLATES.LEAD_B 
    };

    transporter.sendMail(mail_options,(error, info) => {
            if(error) {
                console.log(error)
                res.status(500).json(error);
            } else {
              let mail_opt_adm = Object.assign({},mail_options,{to:ADMIN_MAIL,template:TEMPLATES.LEAD_ADMIN})
              // let mail_opt_adm = {...mail_options,to:ADMIN_MAIL,template:TEMPLATES.LEAD_ADMIN}

              transporter.sendMail(mail_opt_adm,()=>{
                if(error){
                  console.log(error)
                  res.status(500).json(error);
                } else {
                  res.status(200).json({
                    new_lead,
                    message:'Registro creado con éxito',
                    mail_message:`Correos enviados con éxito a ${body.email}`
                  })
                }
              })
            }
        });


  } catch(error){
    if(error.code&&error.code===11000){
      res.status(200).json({
        error:'Registro duplicado'
      })
    }
    next(error);
  }
}

export const update_lead = async(req,res,next)=>{
  const {body,params:{lead_id}} = req
  try{
    const lead = await Lead.findByIdAndUpdate(lead_id,body,{new:true})
    res.status(201).json(lead)
  } catch(error){
    next(error)
  }
}
