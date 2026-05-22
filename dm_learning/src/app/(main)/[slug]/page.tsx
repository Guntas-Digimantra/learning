import { notFound } from 'next/navigation';
import AiMasterclass from '@/components/ai-masterclass/AiMasterclass';
import {
  webinarConfig,
  webinarSlugs,
  WebinarSlug,
} from '@/app/data/webinarConfig';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug as WebinarSlug;
  const config = webinarConfig[slug];

  if (!config) return {};

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (webinarSlugs.includes(slug as WebinarSlug)) {
    return <AiMasterclass />;
  }

  return notFound();
}
