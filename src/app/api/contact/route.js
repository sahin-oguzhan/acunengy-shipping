// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, service, message, subject } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.kurumsaleposta.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"Web Sitesi Bildirimi" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      replyTo: email,
      subject: subject || `Yeni Form Talebi: ${name} (${service || 'Genel'})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
          <h2 style="color: #0284c7; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-top: 0;">${subject || 'Yeni Web Form Bildirimi'}</h2>
          <p><strong>👤 İlgili Kişi:</strong> ${name}</p>
          <p><strong>✉️ E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
          ${service ? `<p><strong>🛠️ Seçilen Hizmet / Kapsam:</strong> ${service}</p>` : ''}
          <div style="margin-top: 16px; padding: 14px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0284c7;">
            <strong>📝 Mesaj / Detaylar:</strong>
            <p style="white-space: pre-line; margin-top: 6px;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'İletildi' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Mail Gönderim Hatası:', error);
    return NextResponse.json(
      { success: false, message: 'Gönderim başarısız' },
      { status: 500 },
    );
  }
}
