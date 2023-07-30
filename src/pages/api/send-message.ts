// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import MailJet from 'node-mailjet';

const mailjet = new MailJet({
  apiKey: process.env.NEXT_MAILJET_API_KEY,
  apiSecret: process.env.NEXT_MAILJET_API_SECRET,
});

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    response.status(500).json({ message: 'Method not allowed' });
    return;
  }

  if (!mailjet.getAPIKey()) {
    response.status(500).json({ message: 'Not initialized' });
    return;
  }

  if (!request.body.name || !request.body.email || !request.body.message) {
    response.status(500).json({ message: 'Missing data' });
    return;
  }

  mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'screenside.dmc@gmail.com',
            Name: `${request.body.name} (${request.body.email})`,
          },
          To: [
            {
              Email: 'screenside.dmc@gmail.com',
              Name: 'DMC Website',
            },
          ],
          Subject: `Message from ${request.body.name}`,
          TextPart: request.body.message,
          HTMLPart: `<p>${request.body.message}</p>`,
        },
      ],
    })
    .then((_result) => {
      response.status(200).json({
        message: 'Email send',
      });
    })
    .catch((err) => {
      response.status(500).json({
        message: 'Error while sending email',
        code: err.statusCode,
      });
    });
};

export default handler;
