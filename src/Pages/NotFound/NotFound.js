import { Page } from '../../UI/Page/Page';
import GearIcon from '@rsuite/icons/Gear';

import "./NotFound.css"

export const NotFound = () => {
    return (
        <Page header={'Content not found!'}>
            <GearIcon spin className={'gear-icon'} />
        </Page>
    )
}