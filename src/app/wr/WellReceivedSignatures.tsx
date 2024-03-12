import { Data } from "@/store/types";

const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/-/g, "");
};

const getReviewContent = (source: string) => {
  switch (source) {
    case "trustpilot":
      return `<p style=margin:0;font-family:Inter,Arial,Helvetica,sans-serif;font-size:9px;line-height:11px;color:#616666>If you enjoyed our service, leave us a <a href=https://www.trustpilot.com/review/wellreceived.com style="font-family:Inter,Arial,Helvetica,sans-serif;font-size:9px;color:#00b67a;font-weight:600;text-decoration:none;border-bottom:1px solid #00b67a" target=_blank>review</a> on <img alt="Trustpilot logo" height=12 src=https://storage.googleapis.com/email_signatures/wellreceived/images/trustpilot-logo.png style=width:48px;height:12px;vertical-align:sub;font-size:16px;color:#494949 width=48></p>`;
    case "upcity":
      return `<p style="margin:0;padding:0;font-size: 9px; line-height: 11px; font-weight: 500; color: #494949; opacity: 0.9;font-family: 'Inter', Arial, sans-serif;">If you enjoyed our service, leave us a <a target="_blank" href="https://upcity.com/profiles/wellreceived/portland-or/write-review" style="font-size: 9px; line-height: 11px; font-weight: 500; color:#D37728; opacity: 0.9;font-family: 'Inter', Arial, sans-serif;text-decoration:none;">review</a> on <img src="https://storage.googleapis.com/email_signatures/wellreceived/images/upcity-logo.png" width="53" height="14" style="width:53px;height:14px;vertical-align:bottom;"></p>`;
    case "google":
      return `<p style="margin:0;padding:0;font-size: 9px; line-height: 11px; font-weight: 500; color: #494949; opacity: 0.9;font-family: 'Inter', Arial, sans-serif;">If you enjoyed our service, leave us a <a target="_blank" href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x5495a1218e4d75f9:0x461c945340ab3d69!12e1?source=g.page.m.dd._&amp;laa=lu-desktop-reviews-dialog-review-solicitation" style="font-size: 9px; line-height: 11px; font-weight: 500; color:#4A8DFF; opacity: 0.9;font-family: 'Inter', Arial, sans-serif;text-decoration:none;">review</a> on <img src="https://storage.googleapis.com/email_signatures/wellreceived/images/google-logo.png" width="38" height="13" style="width:38px;height:13px;vertical-align:middle;"></p>`;
    case "referral":
      return `<p style="margin:0;padding:0;font-size: 9px; line-height: 11px; font-weight: 500; color: #494949; opacity: 0.9;font-family: 'Inter', Arial, sans-serif;">Know someone who could use our service? <br> Refer a friend and get <span style="font-size: 9px; line-height: 11px; font-weight: 700; color: #4A8DFF; opacity: 0.9;font-family: 'Inter', Arial, sans-serif;">$150 credit.</span> </p>`;
    case "wecare":
      return `<p style="margin:0;padding:0;font-size: 9px; line-height: 11px; font-weight: 500; color: #494949; opacity: 0.9;font-family: 'Inter', Arial, sans-serif;">We're donating 1% to provide underserved<br> communities with access to healthcare.</p>`;
    default:
      return "";
  }
};

const WellReceivedSignatures = ({
  name,
  position,
  email,
  phone,
  bookingLink,
  imageName,
  imageAlt,
  source,
}: Data): string => {
  const reviewContent = getReviewContent(source);
  let image;
  if (source === "wecare") {
    image = `<img src="https://storage.googleapis.com/email_signatures/wellreceived/images/we-care-logo.png" width="71" height="14" style="width: 71px; height: 14px;">`;
  } else {
    image = `<img alt="WellReceived logo" height=30 src=https://storage.googleapis.com/email_signatures/wellreceived/images/wr-logo.png style=font-size:16px;color:#0b4751;width:72px;height:30px width=72>`;
  }

  const formattedPhone = formatPhoneNumber(phone);

  return `<html><head>
  <title>${name} - WellReceived</title><meta charset="UTF-8"></head><body style="font-family:'Inter', Arial, Helvetica, sans-serif; margin:0px; padding:0px; background:#FFFFFF;-webkit-font-smoothing: antialiased;" data-new-gr-c-s-check-loaded="14.1157.0" data-gr-ext-installed=""><table bgcolor=#F9FAFB border=0 cellpadding=0 cellspacing=0 style=font-family:Inter,Arial,Helvetica,sans-serif;background-color:#f9fafb;width:450px;min-width:450px;max-width:450px;margin:0;border-radius:40px;box-sizing:border-box;border-collapse:collapse><tr><td valign="top" style="padding:30px 0 30px 30px;width:72px;font-size:0"><img alt="${imageAlt}" height=72 src="https://storage.googleapis.com/email_signatures/wellreceived/images/${imageName}.png" style=font-size:16px;color:#0b4751;width:72px;height:72px;display:inline-block width=72><a href=https://www.wellreceived.com/${
    source === "wecare" ? "why/we-care" : ""
  } style=box-sizing:border-box;display:inline-block;color:#0b4751;font-size:16px;margin-top:${
    source === "wecare" ? `94px` : `64px`
  } target=_blank>${image}</a>
  </td><td style="padding:27px 26px 30px 64px"><p style="font-family:Inter,Arial,Helvetica,sans-serif;font-weight:500;color:#0b4751;font-size:24px;margin:0 0 2px;line-height:28px;letter-spacing:-1px">${name}</p><p style="font-family:Inter,Arial,Helvetica,sans-serif;color:#0b4751;font-size:10px;margin:0 0 20px 0;font-weight:500;line-height:12px">${position}</p>  <p style="margin:0 0 2px"><img alt="Mail icon" height=18 src=https://storage.googleapis.com/email_signatures/wellreceived/images/mail-icon.png style=width:18px;height:18px;margin-right:6px;font-size:16px;color:#0b4751;vertical-align:middle width=18><a href=mailto:${email} style=font-family:Inter,Arial,Helvetica,sans-serif;color:#616666;font-size:12px;font-weight:500;line-height:20px;cursor:pointer;letter-spacing:-.12px;text-decoration-line:underline>${email}</a></p><p style="margin:0 0 ${
    bookingLink ? `2px` : `53px`
  }"><img alt="Call icon" height=18 src=https://storage.googleapis.com/email_signatures/wellreceived/images/call-icon.png style=width:18px;height:18px;margin-right:6px;font-size:16px;color:#0b4751;vertical-align:middle width=18><a href=tel:+${formattedPhone} style=font-family:Inter,Arial,Helvetica,sans-serif;color:#616666;font-size:12px;font-weight:500;line-height:20px;cursor:pointer;letter-spacing:-.12px;text-decoration-line:underline target=_blank>${phone}</a></p>${
    bookingLink &&
    `<p style="margin:0 0 30px"><img alt="Booking icon" height=18 src=https://storage.googleapis.com/email_signatures/wellreceived/images/calendar-icon.png style=width:18px;height:18px;margin-right:6px;font-size:16px;color:#0b4751;vertical-align:middle width=18><a href=${bookingLink} style=font-family:Inter,Arial,Helvetica,sans-serif;color:#616666;font-size:12px;font-weight:500;line-height:20px;cursor:pointer;letter-spacing:-.12px;text-decoration-line:underline target=_blank>Book Appointment</a></p>`
  }${reviewContent}</td></tr></table></body></html>
  `;
};

export default WellReceivedSignatures;
