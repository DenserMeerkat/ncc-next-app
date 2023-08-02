import {
  camps_trainings,
  special_occasions,
  republic_day,
  independence_day,
  events_campaigns,
  sports_activity,
} from "./mainGallery";

export const gallery = [
  {
    id: 0,
    slug: "camps-and-training",
    title: "Camps & Training",
    thumb: "/images/gallery/thumbs/camps_&_training.jpg",
    alt: "Camps & Training",
    photos: camps_trainings,
  },
  {
    id: 1,
    slug: "republic-day",
    title: "Republic Day",
    thumb: "/images/gallery/thumbs/republic_day.jpg",
    alt: "Republic Day",
    photos: republic_day,
  },
  {
    id: 2,
    slug: "independence-day",
    title: "Independence Day",
    thumb: "/images/gallery/thumbs/independence_day.jpg",
    alt: "Independence Day",
    photos: independence_day,
  },
  {
    id: 3,
    slug: "sports-activities",
    title: "Sports Activities",
    thumb: "/images/gallery/thumbs/sports_activities.jpg",
    alt: "Sports Activities",
    photos: sports_activity,
  },
  {
    id: 4,
    slug: "events-and-campaigns",
    title: "Events & Campaigns",
    thumb: "/images/gallery/thumbs/events_&_campaigns.jpg",
    alt: "Events & Campaigns",
    photos: events_campaigns,
  },
  {
    id: 5,
    slug: "special-occasions",
    title: "Special Occasions",
    thumb: "/images/gallery/thumbs/special_occasions.jpg",
    alt: "Special Occasions",
    photos: special_occasions,
  },
];
