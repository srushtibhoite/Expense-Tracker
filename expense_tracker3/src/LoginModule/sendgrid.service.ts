import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendGridService {
  constructor(private readonly configService: ConfigService) {
    // Set the SendGrid API key from an environment variable
    
}

  async send(mail: SendGrid.MailDataRequired) {
    console.log(`mail.to`, mail.to);
    console.log(`mail.from`, mail.from);
    const transport = await SendGrid.send(mail);
    // avoid this on production. use log instead :)
    console.log(`E-Mail sent to ${mail.to}`);
    return transport;
  }
}
