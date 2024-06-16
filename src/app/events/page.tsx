'use-client';

import { getTags } from 'src/actions/tag';
import { getCategoriesNameOnly } from 'src/actions/categories';
import { getEvents, getLatestEvent } from 'src/actions/events';

import EventPostsView from 'src/sections/_event/view/events-posts-view';

import { IPublicationProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Events - National Policy Forum',
};

export const revalidate = 10;

export default async function EventListPage() {
  const events: IPublicationProps[] = await getEvents();
  const latest_events: IPublicationProps[] = await getLatestEvent();
  const tags: string[] = await getTags();
  const categories: string[] = await getCategoriesNameOnly();

  return (
    <EventPostsView
      event={events}
      tags={tags}
      categories={categories}
      latest_events={latest_events}
    />
  );
}
