import { IBlogPostProps } from 'src/types/blog';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name: string) => `
<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh. Donec posuere vulputate arcu. Quisque rutrum.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>

<br/>
<br/>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_01.jpg" /></p>
<br/>
<br/>
<br/>

<h4>Curabitur suscipit suscipit tellus</h4>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<h4>Nullam accumsan lorem in</h4>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</p>

<br/>
<br/>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_02.jpg" /></p>
<br/>
<br/>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
`;

const base = (index: number) => ({
  id: _mock.id(index),
  slug: _mock.slug(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  category: 'Marketing',
  favorited: _mock.boolean(index),
  created_at: _mock.time(index),
  updated_at: _mock.time(index),
  duration: '8 minutes read',
  tags: _tags.slice(index + 1, index + 2),
  author: {
    name: _mock.fullName(index),
    role: _mock.role(index),
    avatar: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
  },
});

// ----------------------------------------------------------------------

export const _marketingPosts: IBlogPostProps[] = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('marketing'),
  cover: _mock.image.marketing(index),
  hero: `/assets/images/marketing/marketing_${index + 1}.jpg`,
}));

export const _travelPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('travel'),
  cover: _mock.image.travel(index),
  hero: `/assets/images/travel/travel_post_hero.jpg`,
}));

export const _careerPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('career'),
  cover: _mock.image.career(index),
  hero: `/assets/images/career/career_post_hero.jpg`,
}));

export const _coursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  cover: _mock.image.course(index),
  hero: `/assets/images/course/course_post_hero.jpg`,
}));
