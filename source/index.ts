/** Fetch the user's locale via client-side */
const navigatorLanguage =
	(typeof navigator !== 'undefined' && navigator.language) || ''

/** Fetch the user's locale via server-side */
const envLanguage =
	(typeof process !== 'undefined' &&
		typeof process.env !== 'undefined' &&
		process.env.LANG) ||
	''

/** Fetch the user's locale */
const language = navigatorLanguage || envLanguage

/** Determine if the user is North American */
const NorthAmerican = /([_-]US|[_-]CA)$/.test(language)

/** Sunday in JavaScript */
const Sunday = 0

/** Monday in JavaScript */
const Monday = 1

/** If they are North American, return Sunday, otherwise Monday. */
const StartOfWeek = NorthAmerican ? Sunday : Monday
export default StartOfWeek
