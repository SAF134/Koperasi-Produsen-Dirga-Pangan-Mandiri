"use client";

import { useState, FormEvent } from "react";
import { MessageCircle, Mail, CheckCircle2, AlertCircle, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import { contactData, contactContent } from "@/content/site-data";

interface FormState {
  fullName: string;
  businessName: string;
  phone: string;
  category: string;
  message: string;
  // Honeypot field for bot spam detection
  fax_number: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    businessName: "",
    phone: "",
    category: contactContent.formCategories[0],
    message: "",
    fax_number: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Validate form inputs client-side
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = contactContent.feedbackMessages.validationErrors.name;
    }

    // Indonesian phone regex (e.g. 0812..., +62812..., 62812...)
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,11}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = contactContent.feedbackMessages.validationErrors.phone;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = contactContent.feedbackMessages.validationErrors.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppUrl = (): string => {
    const formattedMessage = [
      "Halo Tim Koperasi Produsen Dirga Pangan Mandiri,",
      "",
      `*Nama Lengkap:* ${formData.fullName.trim()}`,
      `*Usaha / Perusahaan:* ${formData.businessName.trim() || "-"}`,
      `*No. Kontak:* ${formData.phone.trim()}`,
      `*Kategori Kebutuhan:* ${formData.category}`,
      "",
      "*Isi Keterangan:*",
      formData.message.trim(),
    ].join("\n");

    return `https://wa.me/${contactData.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`;
  };

  const generateMailtoUrl = (): string => {
    const subject = `[Inquiry Web] ${formData.category} - ${formData.fullName.trim()}`;
    const body = [
      `Nama Lengkap: ${formData.fullName.trim()}`,
      `Usaha / Perusahaan: ${formData.businessName.trim() || "-"}`,
      `No. Kontak: ${formData.phone.trim()}`,
      `Kategori Kebutuhan: ${formData.category}`,
      "",
      "Pesan / Keterangan:",
      formData.message.trim(),
    ].join("\n");

    return `mailto:${contactData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Honeypot spam trap
    if (formData.fax_number) {
      console.warn("Spam bot submission caught by honeypot.");
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitted(true);

    // Trigger WhatsApp redirect in a new tab
    const waUrl = generateWhatsAppUrl();
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-card border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
          Formulir Kemitraan & Pasokan
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-muted-ink">
          Isi detail kebutuhan Anda di bawah ini untuk terhubung langsung dengan tim koperasi.
        </p>
      </div>

      {/* Success Notification Banner */}
      {isSubmitted && (
        <div
          role="alert"
          className="mb-6 rounded-card border border-agri-green/30 bg-agri-light p-4 text-xs sm:text-sm text-ink animate-in fade-in"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-agri-green mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-agri-green">
                Pesan Anda Siap Dikirimkan!
              </p>
              <p className="mt-1 text-muted-ink">
                {contactContent.feedbackMessages.success}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-button bg-wa px-3.5 py-2 text-xs font-semibold text-white shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Buka WhatsApp Sekarang
                </a>
                <a
                  href={generateMailtoUrl()}
                  className="inline-flex items-center gap-1.5 rounded-button border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-ink shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  Kirimkan via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Anti-Spam Honeypot Field (Hidden from real users) */}
        <div
          style={{
            display: "none",
            opacity: 0,
            position: "absolute",
            left: "-9999px",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <label htmlFor="fax_number">Fax Number</label>
          <input
            id="fax_number"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.fax_number}
            onChange={(e) => setFormData({ ...formData, fax_number: e.target.value })}
          />
        </div>

        {/* Input Nama Lengkap */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs sm:text-sm font-semibold text-ink mb-1.5"
          >
            Nama Lengkap <span className="text-red-600">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="Contoh: Bpk. Bambang Supriyadi"
            className={`w-full rounded-button border bg-canvas px-4 py-2.5 text-base sm:text-sm text-ink placeholder:text-muted-ink/60 transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-agri-green ${
              errors.fullName ? "border-red-500 ring-1 ring-red-500" : "border-border"
            }`}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Input Nama Perusahaan / Usaha */}
        <div>
          <label
            htmlFor="businessName"
            className="block text-xs sm:text-sm font-semibold text-ink mb-1.5"
          >
            Nama Usaha / Perusahaan <span className="text-muted-ink font-normal">(Opsional)</span>
          </label>
          <input
            id="businessName"
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="Contoh: RM Berkah Pangan / PT Katering Sejahtera"
            className="w-full rounded-button border border-border bg-canvas px-4 py-2.5 text-base sm:text-sm text-ink placeholder:text-muted-ink/60 transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-agri-green"
          />
        </div>

        {/* Input Nomor WhatsApp */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs sm:text-sm font-semibold text-ink mb-1.5"
          >
            Nomor WhatsApp / Telepon <span className="text-red-600">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="Contoh: 081234567890 atau +6281234567890"
            className={`w-full rounded-button border bg-canvas px-4 py-2.5 text-base sm:text-sm text-ink placeholder:text-muted-ink/60 transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-agri-green ${
              errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-border"
            }`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Pilihan Kategori Kebutuhan */}
        <div>
          <label
            htmlFor="category"
            className="block text-xs sm:text-sm font-semibold text-ink mb-1.5"
          >
            Kategori Kebutuhan
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full rounded-button border border-border bg-canvas px-4 py-2.5 text-base sm:text-sm text-ink transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-agri-green cursor-pointer"
          >
            {contactContent.formCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Input Pesan / Keterangan */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm font-semibold text-ink mb-1.5"
          >
            Pesan / Keterangan Tambahan <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Tuliskan tonase kuota pasokan yang dibutuhkan, kapasitas kandang yang dimiliki, atau detail pertanyaan Anda..."
            className={`w-full rounded-button border bg-canvas px-4 py-2.5 text-base sm:text-sm text-ink placeholder:text-muted-ink/60 transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-agri-green resize-y ${
              errors.message ? "border-red-500 ring-1 ring-red-500" : "border-border"
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Tombol Aksi Submit Primer & Sekunder */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full sm:flex-1"
            iconLeft={<MessageCircle className="h-4 w-4 text-wa" aria-hidden="true" />}
          >
            Kirim via WhatsApp
          </Button>

          <a
            href={generateMailtoUrl()}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-button border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink shadow-xs hover:shadow-md hover:border-agri-green/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green"
          >
            <Mail className="h-4 w-4 text-muted-ink" aria-hidden="true" />
            <span>Kirim via Email</span>
          </a>
        </div>

        {/* Microcopy Privasi */}
        <p className="text-[11px] text-muted-ink leading-relaxed pt-2 border-t border-border/60">
          {contactContent.privacyNotice}
        </p>
      </form>
    </div>
  );
}
