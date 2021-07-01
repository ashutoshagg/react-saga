import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({ title, value, color = 'black', size = 'tiny' }) {
    return (
        <Segment textAlign="center">
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title="Income" value="1200.12" color='green' />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title="Expenses" value="1300.12" color="red" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances;