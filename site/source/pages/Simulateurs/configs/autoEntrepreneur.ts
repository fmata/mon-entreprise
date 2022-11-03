import { SimulationConfig } from './types'

export const configAutoEntrepreneur: SimulationConfig = {
	objectifs: [
		"dirigeant . auto-entrepreneur . chiffre d'affaires",
		'dirigeant . auto-entrepreneur . revenu net',
		'dirigeant . auto-entrepreneur . revenu net . après impôt',
	],
	'objectifs cachés': [
		'dirigeant . auto-entrepreneur . cotisations et contributions',
		'dirigeant . rémunération . impôt',
	],
	questions: {
		"à l'affiche": [
			{
				label: "Type d'activité",
				dottedName: 'entreprise . activité . nature',
			},
			{
				label: 'Versement libératoire',
				dottedName:
					'dirigeant . auto-entrepreneur . impôt . versement libératoire',
			},
			{
				label: 'Impôt sur le revenu',
				dottedName: 'impôt . méthode de calcul',
			},
			{
				label: 'ACRE',
				dottedName: 'dirigeant . exonérations . ACRE',
			},
		],
		liste: [
			'entreprise',
			'dirigeant',
			'impôt',
			'établissement',
			'situation personnelle',
		],
		'non prioritaires': ['établissement . commune'],
		'liste noire': [
			'entreprise . charges',
			"entreprise . chiffre d'affaires",
			'entreprise . activité . mixte',
		],
	},
	'unité par défaut': '€/an',
	situation: {
		'entreprise . catégorie juridique': "'EI'",
		'entreprise . catégorie juridique . EI . auto-entrepreneur': 'oui',
	},
}