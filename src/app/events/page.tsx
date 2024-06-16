'use-client';

import { getEvents } from 'src/actions/events';

import EventPostsView from 'src/sections/_event/view/events-posts-view';

import { IPublicationProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'Events - National Policy Forum',
};

export const revalidate = 10;

export default async function EventListPage() {
    const events: IPublicationProps[] = await getEvents();

    return (
        <EventPostsView event={events} />
    );
}
