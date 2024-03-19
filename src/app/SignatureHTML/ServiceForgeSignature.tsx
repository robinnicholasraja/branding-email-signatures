import { Data } from "@/store/types";
import { formatPhoneNumber, usernameWordSplit } from "../../../util";

export const ServiceForgeCaSignature = (sfcaData: Data) => {
  const { name, position, email, phone, bookingLink, image } = sfcaData;

  const formattedPhone = formatPhoneNumber(phone);

  return `
    <html>
    <head>
        <title>${name} - Service Forge</title>
        <meta charset="UTF-8">
    </head>
    <body style="font-family: Arial, sans-serif; margin:0px;padding: 0px;  background:#ffffff; -webkit-font-smoothing: antialiased;">
        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#EEEEEE" style="width: 480px;min-width: 480px;max-width: 480px;margin:0px;box-sizing: border-box; border-collapse: collapse;background-color: #EEEEEE;">
            <tbody>
                <tr>
                    <td style="padding:20px;width: 64px;vertical-align: top;text-align:  right;">
                        <img src="${image}" width="64" height="64" style="width: 64px; height: 64px; font-size: 14px; color: #000000;" alt="${name}">
                    </td>
                    <td style="padding: 20px 0;vertical-align: top;">
                        <p style="font-family: Arial, sans-serif;color:#000000;font-size:22px;margin:0 0 12px;line-height: 22px;letter-spacing: -0.2px;">${usernameWordSplit(
                          name
                        )}</p>
                        <p style="font-family: Arial, sans-serif;color:#000000;font-size:12px;margin:0 0 32px;font-weight: 400;line-height: 12px;letter-spacing: -0.12px;">${position}</p>
                        <a href="mailto:${email}" style="display:block;font-family: Arial, sans-serif;color: #000000;font-size:12px;font-weight: 400;line-height: 14px;letter-spacing: -0.12px;text-decoration: none;cursor: pointer;">${email}</a>
                        <a href="tel:+${formattedPhone}" style="display:block;font-family: Arial, sans-serif;color: #000000;font-size:12px;font-weight: 400;line-height: 14px;letter-spacing: -0.12px;text-decoration: none; cursor: pointer;" target="_blank">${phone}</a>
                    </td>
                   <td valign="top" align="right" style="padding: 20px 20px 20px 76px;">
                        <a href="https://www.serviceforge.com/ca" target="_blank" style="margin:0 0 96px;border-radius: 100%;box-sizing: border-box;display: inline-block;height: 16px;"><img src="https://storage.googleapis.com/email_signatures/ServiceForge/ca/images/service-forge-logo.png" width="100" height="16" style="width: 100px; height: 16px; font-size: 14px; color: #000000;" alt="serviceforge"></a>
                        <p style="margin:0;font-family: Arial, sans-serif;color: #000000;font-size:12px;font-weight: 400;line-height: 12px;letter-spacing: -0.2px;">
                            <a href="${bookingLink}" style="font-family: Arial, sans-serif;color: #000000;font-size:12px;font-weight: 400;line-height: 12px;letter-spacing: -0.2px; cursor: pointer;text-decoration-line: underline;" target="_blank">Book a meeting<img src="https://storage.googleapis.com/email_signatures/ServiceForge/ca/images/right-arrow.png" width="8" height="8" style="vertical-align: middle;margin:0 0 0 6px;width: 8px; height: 8px; font-size:12px; color: #000000;" alt="Right arrow">
                            </a>
                        </p>
                   </td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>`;
};

export const ServiceForgeUSSignature = (sfusData: Data) => {
  const { name, position, email, phone, bookingLink, image } = sfusData;

  const formattedPhone = formatPhoneNumber(phone);

  return `
      <html>
      <head>
          <title>${name} - Service Forge</title>
          <meta charset="UTF-8">
      </head>
      <body style="font-family: Arial, sans-serif; margin:0px;padding: 0px;  background:#ffffff; -webkit-font-smoothing: antialiased;">
          <table border="0" cellpadding="0" cellspacing="0" bgcolor="#EEEEEE" style="width: 480px;min-width: 480px;max-width: 480px;margin:0px;box-sizing: border-box; border-collapse: collapse;background-color: #EEEEEE;">
              <tbody>
                  <tr>
                      <td style="padding:20px;width: 64px;vertical-align: top;text-align:  right;">
                          <img src="${image}" width="64" height="64" style="width: 64px; height: 64px; font-size: 14px; color: #000000;" alt="${name}">
                      </td>
                      <td style="padding: 20px 0;vertical-align: top;">
                          <p style="font-family: Arial, sans-serif;color:#000000;font-size:22px;margin:0 0 12px;line-height: 22px;letter-spacing: -0.2px;">${usernameWordSplit(
                            name
                          )}</p>
                          <p style="font-family: Arial, sans-serif;color:#000000;font-size:12px;margin:0 0 32px;font-weight: 400;line-height: 12px;letter-spacing: -0.12px;">${position}</p>
                          <a href="mailto:${email}" style="display:block;font-family: Arial, sans-serif;color: #000000;font-size:12px;font-weight: 400;line-height: 14px;letter-spacing: -0.12px;text-decoration: none;cursor: pointer;">${email}</a>
                          <a href="tel:+${formattedPhone}" style="display:block;font-family: Arial, sans-serif;color: #000000;font-size:12px;font-weight: 400;line-height: 14px;letter-spacing: -0.12px;text-decoration: none; cursor: pointer;" target="_blank">${phone}</a>
                      </td>
                     <td valign="top" align="right" style="padding: 20px 20px 20px 76px;">
                          <a href="https://www.serviceforge.com/ca" target="_blank" style="margin:0 0 96px;border-radius: 100%;box-sizing: border-box;display: inline-block;height: 16px;"><img src="https://storage.googleapis.com/email_signatures/ServiceForge/ca/images/service-forge-logo.png" width="100" height="16" style="width: 100px; height: 16px; font-size: 14px; color: #000000;" alt="serviceforge"></a>
                          <p style="margin:0;font-family: Arial, sans-serif;color: #000000;font-size:12px;font-weight: 400;line-height: 12px;letter-spacing: -0.2px;">
                              <a href="${bookingLink}" style="font-family: Arial, sans-serif;color: #000000;font-size:12px;font-weight: 400;line-height: 12px;letter-spacing: -0.2px; cursor: pointer;text-decoration-line: underline;" target="_blank">Book a meeting<img src="https://storage.googleapis.com/email_signatures/ServiceForge/ca/images/right-arrow.png" width="8" height="8" style="vertical-align: middle;margin:0 0 0 6px;width: 8px; height: 8px; font-size:12px; color: #000000;" alt="Right arrow">
                              </a>
                          </p>
                     </td>
                  </tr>
              </tbody>
          </table>
      </body>
      </html>`;
};
