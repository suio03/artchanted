import Script from 'next/script'

const Analytics = () => (
    <>
        {/* google analytics */}
        {/* <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TNWM9GVWMV"
        />


        <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-TNWM9GVWMV');
                `,
            }}
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16451199232">
        </Script>
        <Script
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'AW-16451199232');
                `,
            }}
        /> */}
        {/* <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "pep2kmabi9");
        `
            }}
        /> */}
        <Script
            defer
            data-domain="artchanted.net"
            src="https://actone.app/js/script.js"
        />

        <Script
            id="google-ads-conversion"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    window.gtagReportConversion = function(url) {
                        const callback = function() {
                            if (typeof url !== 'undefined') {
                                window.location = url;
                            }
                        };
                        
                        gtag('event', 'conversion', {
                            'send_to': 'AW-16451199232/OE-zCPLxu4oaEIDCxaQ9',
                            'value': 1.0,
                            'currency': 'AUD',
                            'event_callback': callback
                        });
                        
                        return false;
                    };
                `
            }}
        />

    </>
)

export default Analytics
