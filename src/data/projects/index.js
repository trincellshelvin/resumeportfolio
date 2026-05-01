import emailTemplate from './email-template.js';
import youthPlatform from './youth-platform.js';
import brandingKit from './branding-kit.js';

export const projects = [emailTemplate, youthPlatform, brandingKit];

/**
 * Returns a single project by its slug, or undefined if not found.
 * @param {string} slug
 */
export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug);
}
