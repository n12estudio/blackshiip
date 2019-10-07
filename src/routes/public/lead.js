import express from 'express';
import * as leadCtrl from '../../controllers/lead'

const app = express.Router()

app
    .route('/leads')
        .get(leadCtrl.list_leads)
        .post(leadCtrl.create_lead)

app
    .route('/leads/:lead_id')
        .get(leadCtrl.get_lead)
        .put(leadCtrl.update_lead)

export default app;
