// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mailjet from 'node-mailjet';

let mailjetConnection = null;

const MAILJET_TEMPLATE_ID = 3935335;

if (
  // process.env.NEXT_PUBLIC_MAILJET_API_KEY &&
  // process.env.NEXT_PUBLIC_MAILJET_API_SECRET
  true
) {
  mailjetConnection = mailjet.connect(
    '8afc6d745ceb4f716749ca891fcf57bd',
    'dbbe05cb9fca72223d4c8ee370476b13'
    // process.env.NEXT_PUBLIC_MAILJET_API_KEY as string,
    // process.env.NEXT_PUBLIC_MAILJET_API_SECRET as string
  );
}

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' });

  if (!mailjetConnection) {
    res.status(500).json({ message: 'Not initialized' });
    return;
  }

  if (req.method !== 'POST') {
    res.status(401).json({ message: 'Method not allowed' });
    return;
  }
  console.log(req.body);

  const request = mailjetConnection.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'screenside.dmc@gmail.com',
          Name: 'Table Brussels',
        },
        To: [
          {
            Email: 'screenside.dmc@gmail.com',
            Name: 'Dmc',
          },
        ],
        TemplateID: MAILJET_TEMPLATE_ID,
        TemplateLanguage: true,
        Subject: 'New message from website',
        Variables: {
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
        },
      },
    ],
  });
  request
    .then((result) => {
      // console.log(result.body);
      res.status(200).json({ ...result.body });
    })
    .catch((err) => {
      // console.log(err.statusCode);
      res.status(500).json({ ...err });
    });
}
