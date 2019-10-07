
  import express from 'express';

  import Subscriber from './public/subscriber';
  import Lead from './public/lead';

  // import { authorization } from '../middlewares/auth';
  const API = '/v1/';
  const API_PUBLIC = '/v1/public';

  const router = express.Router();
  router.get('/', (req, res) => {
    res.send('Blackshiip Development');
  })

  // router.use(authorization);

  router.get(API, (req, res) => {
    res.render('index', {title: 'Blackshiip API'});
  })



  //public
  router.use(API_PUBLIC,Lead);
  router.use(API_PUBLIC,Subscriber);


  export default router;
