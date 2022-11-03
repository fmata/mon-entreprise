import { SimulationConfig } from './types'

export const configArtisteAuteur: SimulationConfig = {
	'objectifs cachés': [
		'artiste-auteur . cotisations',
		'artiste-auteur . revenus',
		'artiste-auteur . cotisations . IRCEC',
	],
	situation: {
		'artiste-auteur': 'oui',
		dirigeant: {
			'applicable si': 'non',
		},
	},
	'unité par défaut': '€/an',
	questions: {
		liste: [
			'artiste-auteur . revenus . BNC . micro-bnc',
			'artiste-auteur . cotisations . option surcotisation',
			'artiste-auteur . cotisations . IRCEC . cotisation RAAP . taux réduit',
			'artiste-auteur . cotisations . IRCEC . profession',
		],
	},
}