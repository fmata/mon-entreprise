import { expect, it } from 'vitest'

import { configArtisteAuteur } from '@/pages/simulateurs/artiste-auteur/simulationConfig'

import artisteAuteurSituations from './artiste-auteur.yaml'
import { engine, getMissingVariables, runSimulations } from './utils'

it('calculate simulations-artiste-auteur', () => {
	runSimulations(
		artisteAuteurSituations,
		[
			...(configArtisteAuteur['objectifs exclusifs'] ?? []),
			...(configArtisteAuteur.objectifs ?? []),
		],
		configArtisteAuteur.situation
	)

	expect(
		getMissingVariables(
			engine
				.setSituation(configArtisteAuteur.situation)
				.evaluate('artiste-auteur . cotisations')
		)
	).toMatchInlineSnapshot(`
		[
		  "artiste-auteur . cotisations . option surcotisation",
		  "artiste-auteur . revenus . BNC . recettes",
		  "artiste-auteur . revenus . traitements et salaires",
		  "salarié . contrat",
		  "salarié . régimes spécifiques . taux réduits",
		  "établissement . commune . département",
		  "établissement . commune . département . outre-mer",
		]
	`)
})
