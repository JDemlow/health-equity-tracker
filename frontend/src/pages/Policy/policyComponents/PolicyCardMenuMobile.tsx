import HetCardMenuMobile from '../../../styles/HetComponents/HetCardMenuMobile'
import { routeConfigs as policyRouteConfigs } from '../policyContent/routeConfigs'

export default function PolicyCardMenuMobile() {
	return (
		<HetCardMenuMobile
			className='smMd:hidden max-w-screen min-w-full w-screen mx-auto my-0 px-0 flex justify-center'
			routeConfigs={policyRouteConfigs}
			label='Policy Context Pages'
		/>
	);
}