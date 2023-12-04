import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    res.status(404).end();
  }

  const body = JSON.parse(req?.body ?? {})

  const name = body?.name;
  const firstName = body?.firstName;
  const subject = body?.subject;
  const mail = body?.mail;
  const message = body?.message;

  if (!name || !firstName || !subject || !mail || !message) {
    res.status(422).json({
      error: 'MISSING_VALUES'
    })
  }

  const html = `<div style="background-color: #181526; margin: 0; padding: 0">
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #f7f7f7"
    width="100%"
  >
    <tbody>
      <tr>
        <td>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="m_-7192359969736224378row-2"
            role="presentation"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="m_-7192359969736224378row-content m_-7192359969736224378stack"
                    role="presentation"
                    style="color: #000000; width: 600px"
                    width="600"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="m_-7192359969736224378column m_-7192359969736224378column-1"
                          style="
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="15"
                            cellspacing="0"
                            role="presentation"
                            style="word-break: break-word"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td class="m_-7192359969736224378pad">
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                        color: #131313;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 16px; text-align: center">
                                        <strong>
                                          <span style="font-size: 22px">${subject}</span><br>
                                          <span style="font-size: 16px">${firstName} ${name} [${mail}]</span>
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                  <div style="display: flex;
                                  justify-content: left;
                                  margin: 10px; font-family: 'Raleway', sans-serif; white-space: pre-line">
                                    ${message}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  </div>`;

  try {
    await createTransport({
      host: 'mail03.lwspanel.com',
      port: 587,
      auth: {
        user: 'no-reply@vokit.fr',
        pass: 'kK3**@e6Y$dg@CX',
      },
    }).sendMail({
      from: 'Forumaire de contact <no-reply@vokit.fr>',
      to: 'contact@boltcoon.fr',
      subject: subject,
      html: html,
      replyTo: mail
    });

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
}