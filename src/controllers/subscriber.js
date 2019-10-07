import {Subscriber} from '../models';

export const list_subscribers = async(req,res,next)=>{
  try{
    const subs = await Subscriber.find()
    res.status(200).json(subs)
  } catch(error){
    next(error);
  }

}

export const get_subscriber = async(req,res,next)=>{
  try{

  } catch(error){
    next(error);
  }
}

export const create_subscribrer = async(req,res,next)=>{
  try{

  } catch(error){
    next(error);
  }
}

export const update_subscriber = async(req,res,next)=>{
  try{

  } catch(error){
    next(error);
  }
}
