export type ActivityType = 'transport' | 'activity' | 'food' | 'accommodation' | 'shopping';

export interface LocationLink {
  name: string;
  url: string;
  address?: string;
}

export interface Activity {
  time: string;
  title: string;
  description?: string;
  type: ActivityType;
  locations?: LocationLink[];
}

export interface Day {
  date: string;
  title: string;
  activities: Activity[];
}
