import { useTranslation } from 'react-i18next'

import {
	SwitchContainer,
	SwitchLabel,
	SwitchRadio,
	SwitchToggleGroup,
} from '@/design-system/réductionDeCotisations'
import { RégularisationMethod } from '@/utils/réductionDeCotisations'

type Props = {
	régularisationMethod: RégularisationMethod
	setRégularisationMethod: (value: RégularisationMethod) => void
}

export default function RégularisationSwitch({
	régularisationMethod,
	setRégularisationMethod,
}: Props) {
	const { t } = useTranslation()

	return (
		<SwitchContainer>
			<SwitchLabel id="régularisation-switch-label">
				{t(
					'pages.simulateurs.réduction-générale.régularisation.type',
					'Quel type de régularisation souhaitez-vous ?'
				)}
			</SwitchLabel>

			<SwitchToggleGroup
				value={régularisationMethod}
				onChange={(value) => {
					setRégularisationMethod(value as RégularisationMethod)
				}}
				aria-labelledby="régularisation-switch-label"
			>
				<SwitchRadio value="annuelle">
					{t(
						'pages.simulateurs.réduction-générale.régularisation.annuelle',
						'Régularisation annuelle'
					)}
				</SwitchRadio>
				<SwitchRadio value="progressive">
					{t(
						'pages.simulateurs.réduction-générale.régularisation.progressive',
						'Régularisation progressive'
					)}
				</SwitchRadio>
			</SwitchToggleGroup>
		</SwitchContainer>
	)
}
