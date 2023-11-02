import getStartOfWeek from './index.js'

/** {@link getStartOfWeek} with the locale prefilled to that of the current Node.js user */
export default function getStartOfWeekNode(
	// @ts-ignore
	language = process.env.LANG || '',
): number {
	return getStartOfWeek(language)
}
