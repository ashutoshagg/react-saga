import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react'
import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';

import EntryLines from './Components/EntryLines';

function App() {

  // const [name, setName] = useState("Default");

  // const onClickHanlder = (event) => {
  //   setName("Ashu")
  // }

  // useEffect(() => {
  //   console.log("hello")
  // }, [])

  // useEffect(() => {
  //   console.log("hello")
  // }, [name])

  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    console.log(`entries`, entries);
    console.log('result', result);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description: description,
      value: value,
      isExpense: isExpense
    })
    console.log(`result`, result);
    console.log(`entries`, entries);
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      {/* <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic> */}
      <DisplayBalance title="Your Balance" value="2,500.12" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry}/>
      <MainHeader title="Add new transactions" type="h3" />
      <NewEntryForm addEntry={addEntry}/>
      {/* <EntryLine description={entries[1].description} value={entries[1].value} isExpense={entries[1].isExpense} />
      <EntryLine description={entries[2].description} value={entries[2].value} isExpense={entries[2].isExpense} /> */}

      {/* <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> */}

      {/* <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$20,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$100,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> */}
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$1000,00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "$20,00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "$300",
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: "$50",
    isExpense: true
  }
]