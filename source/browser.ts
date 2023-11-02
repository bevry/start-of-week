import getStartOfWeek from './index.js'

/** {@link getStartOfWeek} with the locale prefilled to that of the current web browser user */
export default function getStartOfWeekBrowser(
	// @ts-ignore
	language = window.navigator.language || '',
): number {
	return getStartOfWeek(language)
}
