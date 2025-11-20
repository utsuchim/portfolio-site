"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          お名前
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="山田太郎"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "送信中..." : "送信"}
      </button>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
          メッセージを送信しました。ありがとうございます！
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
          送信に失敗しました。もう一度お試しください。
        </div>
      )}
    </form>
  );
}
