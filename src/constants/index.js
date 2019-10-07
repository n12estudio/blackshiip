import dotenv from 'dotenv'

export const TEMPLATES = {
  LEAD_A:'template_contact_lead',
  LEAD_B:'template_contact_lead_b',
  LEAD_ADMIN:'template_contact_admin'
}

export const ADMIN_MAIL = process.env.NODE_ENV === 'development'
?'luiscasillas@n12.mx'
:'connection@blackshiip.community'
