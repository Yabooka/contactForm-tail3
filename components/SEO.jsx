import Head from 'next/head'
import { useRouter } from 'next/router'
import metadata from './metadata'

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={description} />
      <meta property='og:url' content={`${metadata.siteUrl}${router.asPath}`} />
      <meta property='og:type' content={ogType} />
      <meta property='og:site_name' content={metadata.title} />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={title} />
      {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url }) => (
          <meta property='og:image' content={url} key={url} />
        ))
      ) : (
        <meta property='og:image' content={ogImage} key={ogImage} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={metadata.twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={twImage} />
    </Head>
  )
}

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = metadata.siteUrl + metadata.socialBanner
  const twImageUrl = metadata.siteUrl + metadata.socialBanner
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType='website'
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}
