import * as venom from 'venom-bot';
import { Whatsapp } from 'venom-bot';
import { writeFile } from 'fs';
import { Buffer } from 'buffer';

export default class VenomService {
  private client?: Whatsapp;
  private qrCode?: string;

  public async initialize(): Promise<void> {
    await venom
      .create(
        'sessionName',
        base64Qr => {
          this.qrCode = base64Qr;
        },
        undefined,
        { logQR: false }
      )
      .then(client => {
        this.client = client;
      })
      .catch(error => {
        if (error === 'Not Logged') {
          this.initialize();
        }
      });
  }

  public async sendMessage(to: string, message: string): Promise<void> {
    if (!this.client) {
      throw new Error('Venom client not initialized');
    }

    await this.client.sendText(to, message);
  }

  public getQrCode(): string | undefined {
    return this.qrCode;
  }
}
