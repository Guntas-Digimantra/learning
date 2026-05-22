//src/app/blog/page.tsx
import Blog from '@/components/blog';
import '../../../../public/css/blog.css';
import { fetchPostsFromServer } from '@/components/lib/FetchPosts';

export const metadata = {
  title: 'DMLearning by DigiMantra | Future-Ready Tech Skills',
  description:
    'DMLearning equips students and professionals with hands-on tech training, live projects, expert mentorship, and job-ready digital skills that go beyond theory.',
  openGraph: {
    title: 'DMLearning by DigiMantra - Learn Beyond the Classroom',
    description:
      'DMLearning bridges the gap between theory and practice with hands-on tech training, live projects, expert mentorship, and job-ready digital skills.',
  },
};

export default async function BlogPage() {
  let posts = [];

  try {
    posts = await fetchPostsFromServer();
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return <Blog posts={posts} />;
}
