// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'aws-lambda',
    serveStatic: true,
  },
  app: {
    head: {
      meta: [
        { property: 'og:image', content: 'https://example.com/og-default.png' },
        { property: 'og:title', content: 'あなたのサービス名' },
        { property: 'og:description', content: 'あなたのサービスのデフォルトの説明文' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://example.com' }
      ]
    }
  }
})
