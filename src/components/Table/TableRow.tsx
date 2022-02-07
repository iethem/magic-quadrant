import { memo, useCallback } from "react";

import { Item } from "../../common/Item";
import { useAppStore } from "../../Context";
import Button from "../Button";
import Input from "../Input";
import Table from "./Table";

interface Props {
  item: Item;
}

function TableRow({ item }: Props) {
  const { dispatch, updateItem, deleteItem } = useAppStore();

  const handleDelete = useCallback((itemId: string) => {
    dispatch(deleteItem(itemId));
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newItem = { ...item, [e.target.name]: e.target.value };
    dispatch(updateItem(newItem));
  }, [item]);

  return (
    <Table.Row key={item.id}>
      <Table.Cell>
        <Input name="label" value={item.label} onChange={handleChange} />
      </Table.Cell>
      <Table.Cell>
        <Input
          name="vision"
          type="number"
          value={item.vision}
          onChange={handleChange}
        />
      </Table.Cell>
      <Table.Cell>
        <Input
          name="ability"
          type="number"
          value={item.ability}
          onChange={handleChange}
        />
      </Table.Cell>
      <Table.Cell borderless>
        <Button onClick={() => handleDelete(item.id)} block>
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}

export default memo(TableRow);
