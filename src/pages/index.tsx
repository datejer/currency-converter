import { SEO } from '@/components/SEO'
import { Layout } from '@/components/Layout/Layout'
import { Converter } from '@/components/Converter/Converter'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Converter />
    </Layout>
  )
}
