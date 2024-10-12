import { Router, Request, Response } from 'express';
import { intancedVenomService } from '../app';

const routes = Router();

routes.post('/send-message', async (request: Request, response: Response) => {
  const { to, message } = request.body;
  try {
    await intancedVenomService.sendMessage(to, message);
    response.status(200).send('Message sent successfully');
  } catch (error) {
    response.status(500).send('Error sending message');
  }
});

routes.get('/qrcode', async (request: Request, response: Response) => {
  try {
    const qrcode = intancedVenomService.getQrCode();
    response.send(qrcode);
  } catch (error) {
    response.status(500).send('Error generating QR code');
  }
});

export default routes;

//teste
