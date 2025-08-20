export interface UserSubscription {
  isSubscribed: boolean;
  subscriptionTier: 'free' | 'pro' | 'enterprise';
  customDomainEnabled: boolean;
  userId: string;
  subscriptionExpiryDate: string;
}

// Test Case: Unsubscribed user (can only publish to staging)
export const mockUserSubscription: UserSubscription = {
  isSubscribed: false,
  subscriptionTier: 'free',
  customDomainEnabled: false,
  userId: 'test-user-123',
  subscriptionExpiryDate: '2024-12-31'
};

// Test Case 2: Pro user with custom domain (uncomment to test)
// export const mockUserSubscription: UserSubscription = {
//   isSubscribed: true,
//   subscriptionTier: 'pro',
//   customDomainEnabled: true,
//   userId: 'test-user-123',
//   subscriptionExpiryDate: '2024-12-31'
// };

// Function to check if user can publish to custom domain
export const canPublishToCustomDomain = (userSubscription: UserSubscription): boolean => {
  // Must be subscribed AND have custom domain enabled
  return userSubscription.isSubscribed && userSubscription.customDomainEnabled;
};

// Function to check if user can publish to staging
export const canPublishToStaging = (userSubscription: UserSubscription): boolean => {
  // Only subscribed users can publish to staging
  return userSubscription.isSubscribed;
}; 