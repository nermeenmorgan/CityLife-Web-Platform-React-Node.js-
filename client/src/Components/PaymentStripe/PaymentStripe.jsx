import React from 'react'
import { useTranslation } from "react-i18next";

export default function PaymentStripe() {
    const { t, i18n } = useTranslation();
    return <>
      <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        <div>{t("PaymentStripe")}</div>
</div>
    </>
}