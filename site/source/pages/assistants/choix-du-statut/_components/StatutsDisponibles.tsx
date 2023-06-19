import styled from 'styled-components'

import { DottedName } from '@/../../modele-social'
import { Statut, StatutTag } from '@/components/StatutTag'
import { useEngine } from '@/components/utils/EngineContext'
import { Message } from '@/design-system'
import { H5 } from '@/design-system/typography/heading'
import { Li, Ul } from '@/design-system/typography/list'
import { SmallBody } from '@/design-system/typography/paragraphs'

export default function StatutsDisponibles() {
	return (
		<StyledMessage>
			<H5 as="h2"> Statuts disponibles</H5>
			<SmallBody>
				Les statuts disponibles diffèrent en fonction de l'activité
				professionnelle que vous exercez
			</SmallBody>
			<StyledUl noMarker>
				<Statut statut="entreprise . catégorie juridique . EI . EI" />
				<Statut statut="entreprise . catégorie juridique . EI . auto-entrepreneur" />
				<Statut statut="entreprise . catégorie juridique . SARL . EURL" />
				<Statut statut="entreprise . catégorie juridique . SARL . SARL" />
				<Statut
					statut="entreprise . catégorie juridique . SAS . SAS"
				/>
				<Statut
					statut="entreprise . catégorie juridique . SAS . SASU"
				/>
				{/* <Statut
					statut="entreprise . catégorie juridique . SELARL . SELARL"
					status=""
				/>
				<Statut
					statut="entreprise . catégorie juridique . SELARL . SELARLU"
					status=""
				/>
				<Statut
					statut="entreprise . catégorie juridique . SELAS . SELAS"
					status=""
				/>
				<Statut
					statut="entreprise . catégorie juridique . SELAS . SELASU"
					status=""
				/> */}
				<Statut statut="entreprise . catégorie juridique . association" />
			</StyledUl>
		</StyledMessage>
	)
}

const StyledMessage = styled(Message)`
	padding-top: 2rem;
	border: none;
	border-radius: 0.5rem;
	background: ${({ theme }) =>
		theme.darkMode
			? theme.colors.bases.primary[400]
			: theme.colors.bases.primary[100]};

	/* cut the top right corner */
	clip-path: polygon(0 100%, 0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%);

	&:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 40px;
		height: 40px;
		background: ${({ theme }) => theme.colors.bases.primary[300]};
		border-bottom-left-radius: 0.5rem;
		/* css blue triangle */
		clip-path: polygon(
			-10px -10px,
			0 calc(100% + 10px),
			calc(100% + 10px) calc(100% + 10px)
		);
	}
`

function Statut({ statut }: { statut: DottedName }) {
	const engine = useEngine()
	const disabled =
		engine.evaluate({ '=': [statut, 'non'] }).nodeValue === true

	const acronyme = (engine.getRule(statut).rawNode.acronyme ??
		engine.getRule(statut).title.toLocaleLowerCase()) as Statut

	return (
		<Li className={disabled ? 'disabled' : ''}>
			<StyledSpan>{engine.getRule(statut).title}</StyledSpan>
			<StatutTag statut={acronyme} text="acronym" showIcon />
		</Li>
	)
}

const StyledSpan = styled.span``

const StyledUl = styled(Ul)`
	${Li} {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: ${({ theme }) => theme.colors.extended.grey[100]};
		border-radius: ${({ theme }) => theme.box.borderRadius};
		padding: ${({ theme }) => theme.spacings.sm};

		${StyledSpan} {
			color: ${({ theme }) => theme.colors.bases.primary[700]};
			font-weight: bold;
		}

		&.disabled {
			background: ${({ theme }) => theme.colors.extended.grey[200]};
			${StyledSpan} {
				color: ${({ theme }) => theme.colors.extended.grey[600]};
				font-weight: bold;
				text-decoration-line: line-through;
			}
		}
	}
`