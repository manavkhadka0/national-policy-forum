'use-client';

import { getLatestEvent, getSingleEvent } from 'src/actions/events';

import EventPostView from 'src/sections/_event/view/event-post-view';

import { IPublicationProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: { id: string } }) {
    const event = await getSingleEvent(params.id);
    return {
        title: `${event.title} | National Policy Forum`,
        description: event.description,
        image: event.image,
    };
}

export const revalidate = 10;

export default async function EventDetailPage({ params }: { params: { id: string } }) {
    const events: IPublicationProps = await getSingleEvent(params.id);
    const latest_events: IPublicationProps[] = await getLatestEvent(params.id);

    return (
        <EventPostView event={events} latest_events={latest_events} />
    );
}
