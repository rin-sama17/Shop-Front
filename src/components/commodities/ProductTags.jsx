import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import TagFacesIcon from '@material-ui/icons/TagFaces'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

export default function ProductTags() {
  const classes = useStyles()
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'ورزشی' },
    { key: 1, label: 'تکنولوژی' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
  ])

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key),
    )
  }

  return (
    <div component="ul" className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        )
      })}
    </div>
  )
}
