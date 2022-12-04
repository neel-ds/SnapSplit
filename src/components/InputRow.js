import { IconButton, Stack, TextField } from "@mui/material"
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"

export const InputRow = ({
  index,
  item,
  handleChange,
  handleRemove,
  handleAdd,
  values,
  inputFields
}) => {
  return (
    <Stack spacing={2} style={{ alignItems: "center" }}>
      <TextField
        name="title"
        required
        fullWidth
        label="Name Event"
        onChange={(event) => handleChange(event, index)}
        value={item.title}
      />
      <TextField
        name="image"
        required
        fullWidth
        label="Add Event Image"
        onChange={(event) => handleChange(event, index)}
        value={item.image}
      />

      <TextField
        name="description"
        multiline
        rows={6}
        fullWidth
        label="Description"
        onChange={(event) => handleChange(event, index)}
        value={item.description}
      />

      <div>
        <IconButton onClick={handleRemove}>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      </div>
    </Stack>
  )
}
