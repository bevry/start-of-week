/** Receive a language, and return the start of the week (0 = Sunday, 1 = Monday) */
export default function getStartOfWeek(language: string = ''): number {
	/** Determine if the user is North American */
	const NorthAmerican = /([_-]US|[_-]CA)$/.test(language)

	/** Sunday in JavaScript */
	const Sunday = 0

	/** Monday in JavaScript */
	const Monday = 1

	/** If they are North American, return Sunday, otherwise Monday. */
	const StartOfWeek = NorthAmerican ? Sunday : Monday

	return StartOfWeek
}
