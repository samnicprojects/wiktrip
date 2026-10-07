/**
 * Currency & Number Formatting Utility for Wiktrip
 * Guarantees safe numeric formatting without undefined errors
 */

export function formatINR(val?: number | null | string): string {
  if (val === null || val === undefined) return '0';
  const num = typeof val === 'string' ? parseFloat(val) : val;
  if (isNaN(num)) return '0';
  return num.toLocaleString('en-IN');
}

export function formatPriceRange(min?: number | null, max?: number | null): string {
  if (!min && !max) return 'Quote on Enquiry';
  if (min && !max) return `₹${formatINR(min)}+`;
  if (!min && max) return `Up to ₹${formatINR(max)}`;
  return `₹${formatINR(min)} - ₹${formatINR(max)}`;
}
