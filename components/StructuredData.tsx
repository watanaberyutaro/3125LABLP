// SEO structured data component
export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '3125 LAB',
    description: 'ニッチな業務課題に特化したシステム開発会社',
    url: 'https://3125lablp.vercel.app',
    logo: 'https://3125lablp.vercel.app/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Japanese',
    },
    areaServed: 'JP',
    sameAs: [],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'ニッチなシステム開発',
    provider: {
      '@type': 'Organization',
      name: '3125 LAB',
    },
    areaServed: 'JP',
    description: 'ニッチな業務課題に特化した低価格システム開発。AI連携・業務自動化・Excel効率化など、5万円から対応可能。',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'JPY',
      lowPrice: '50000',
      highPrice: '400000',
      offers: [
        {
          '@type': 'Offer',
          name: 'Liteプラン',
          price: '50000',
          priceCurrency: 'JPY',
          description: '小規模な業務改善実験',
        },
        {
          '@type': 'Offer',
          name: 'Businessプラン',
          price: '200000',
          priceCurrency: 'JPY',
          description: '本格的な業務システム開発',
        },
        {
          '@type': 'Offer',
          name: 'Customプラン',
          price: '400000',
          priceCurrency: 'JPY',
          description: '完全カスタムソリューション',
        },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://3125lablp.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '実績',
        item: 'https://3125lablp.vercel.app/works',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'お問い合わせ',
        item: 'https://3125lablp.vercel.app/contact',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
