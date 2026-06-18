import { LocationData, LocalReview } from '@/types';
import { localReviews } from '@/data/seoData';

// Business base: Bargoed, UK
const BASE_COORDINATES = {
  lat: 51.6917,
  lng: -3.2289,
};

/**
 * Calculates the straight-line distance in miles between two coordinates using the Haversine formula.
 */
export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3958.8; // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
      
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Estimates driving time and total response time in minutes based on distance.
 */
export function estimateResponseTime(distanceMiles: number): {
  drivingDistance: number;
  drivingTime: number;
  totalResponseTime: number;
} {
  // Road network distance is typically 1.25x to 1.3x straight-line distance
  const drivingDistance = Math.round(distanceMiles * 1.28 * 10) / 10;
  
  // Assume average driving speed of 42 mph including traffic
  const drivingTimeMinutes = Math.round((drivingDistance / 42) * 60);
  
  // Dispatch response time (e.g. tool prep, traffic buffers)
  // Lock response time to increments of 5 minutes, minimum 20 minutes
  const rawResponseTime = drivingTimeMinutes + 10;
  const totalResponseTime = Math.max(20, Math.round(rawResponseTime / 5) * 5);
  
  return {
    drivingDistance,
    drivingTime: drivingTimeMinutes,
    totalResponseTime,
  };
}

/**
 * Generates a localized geo-routing paragraph describing the connection from Bargoed.
 */
export function generateGeoText(location: LocationData, serviceTitle: string): string {
  if (location.slug === 'bargoed') {
    return `Operating directly from our main business base in Bargoed, Ed Jones Mobile Locksmith provides immediate, ultra-fast support. We can reach any address or roadside emergency in Bargoed in under 15 to 20 minutes. As our home service hub, Bargoed enjoys priority dispatch for auto key programming, module coding, and emergency vehicle entry with zero travel delay.`;
  }

  const distance = calculateDistance(BASE_COORDINATES.lat, BASE_COORDINATES.lng, location.lat, location.lng);
  const { drivingDistance, drivingTime, totalResponseTime } = estimateResponseTime(distance);
  const postcodeStr = location.postcode ? ` (${location.postcode})` : '';

  return `Operating from our main vehicle base in Bargoed, Ed Jones Mobile Locksmith covers the estimated ${drivingDistance} miles to ${location.name}${postcodeStr} in approximately ${drivingTime} minutes. By leveraging major commuter routes like the ${location.keyRoute}, our fully equipped mobile workshop guarantees a rapid roadside dispatch time of around ${totalResponseTime} minutes. Whether you are facing a lockout, require transponder programming, or need custom van deadlocks fitted, our close proximity ensures we arrive quickly to resolve your ${serviceTitle} emergency in ${location.name}.`;
}

/**
 * Filters testimonials for a specific location, falling back to general ones if none exist.
 */
export function getLocalTestimonials(locationName: string, count: number = 3): LocalReview[] {
  const filtered = localReviews.filter(
    (review) => review.location.toLowerCase() === locationName.toLowerCase()
  );
  
  if (filtered.length > 0) {
    return filtered.slice(0, count);
  }
  
  // Fallback: return Cardiff reviews as they are representative general reviews, or first count reviews
  return localReviews.slice(0, count);
}

/**
 * Programmatically replaces templates placeholders in the copy.
 */
export function replacePlaceholders(content: string, locationName: string, postcode?: string): string {
  const postcodeStr = postcode ? ` ${postcode}` : '';
  return content
    .replace(/{location}/g, locationName)
    .replace(/{postcode}/g, postcodeStr);
}
