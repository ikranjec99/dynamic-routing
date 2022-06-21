import { Button } from "rsuite"
import { Page } from "../../UI/Page/Page"

export const Home = () => {
    return (
        <Page header={'Home'}>
            <Button children={'Hello world!'}/>
        </Page>
    )
}