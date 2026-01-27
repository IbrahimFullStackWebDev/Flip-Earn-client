export interface TitleType {
  title: string;
  description: string;
}

export interface UserType {
  id: "user_1";
  email: "creator1@example.com";
  name: "Alex Johnson";
  image: "https://randomuser.me/api/portraits/men/32.jpg";
  createdAt: "Thu Oct 16 2025 12:52:10 GMT+0530 (India Standard Time)";
  updatedAt: "Thu Oct 16 2025 12:52:10 GMT+0530 (India Standard Time)";
}

export interface ListingType {
  id: string;
  ownerId: string;
  title: string;
  platform: string;
  username: string;
  followers_count: number;
  engagement_rate: number;
  monthly_views: number;
  niche: string;
  price: number;
  description: string;
  verified: boolean;
  monetized: boolean;
  country: string;
  age_range: string;
  status: string;
  featured: boolean;
  images: string[];
  platformAssured: boolean;
  owner: UserType;
  isCredentialSubmitted: boolean;
  isCredentialVerified: boolean;
  isCredentialChanged: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface InitialStateType {
  listings: ListingType[];
  userListings: ListingType[];
  balance: {
    earned: number;
    withdrawn: number;
    available: number;
  };
}
