import getStartOfWeek from './index.js'

/** {@link getStartOfWeek} with the locale prefilled to that of the current Deno user */
export default function getStartOfWeekDeno(
	// @ts-ignore
	language = Deno.env.get('LANG') || '',
): number {
	return getStartOfWeek(language)
}
