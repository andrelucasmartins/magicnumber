import Script from "next/script";

interface GoogleAnalyticsProps {
  gaMeasurementId: string;
}
export const GoogleAnalytics = ({ gaMeasurementId }: GoogleAnalyticsProps) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${gaMeasurementId}'};
      `}
      </Script>
    </>
  );
};
