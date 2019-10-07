import express from 'express';
import * as subsCtrl from '../../controllers/subscriber';

const app = express.Router()


app
  .route('/subscriber')
    .get(subsCtrl.list_subscribers)

export default app;
