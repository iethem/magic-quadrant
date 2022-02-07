import { memo, useCallback } from "react";

import { Item } from "../../common/Item";
import { useAppStore } from "../../Context";
import Button from "../Button";
import Table from "./Table";
import TableRow from "./TableRow";

function TableContainer() {
  const { state, dispatch, addItem } = useAppStore();
  const { data } = state;

  const handleAdd = useCallback(() => {
    const newItem = {
      id: Date.now(),
      label: "New",
      vision: 50,
      ability: 50,
    };
    
    dispatch(addItem(newItem));
  }, []);

  return (
    <Table>
      <Button onClick={handleAdd}>Add</Button>
      <Table.Row>
        <Table.Column width="16rem">Label</Table.Column>
        <Table.Column>Vision</Table.Column>
        <Table.Column>Ability</Table.Column>
        <Table.Column>Delete</Table.Column>
      </Table.Row>
      {data.map((item: Item) => (
        <TableRow item={item} />
      ))}
    </Table>
  );
}

export default memo(TableContainer);
