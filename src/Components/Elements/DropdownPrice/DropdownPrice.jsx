import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { NewDropdown,ButtonDropdown } from './Style'


export default function DropdownPrice({}) {
const [range, setRange] = useState([10, 90]);
const [value, setValue] = useState({ min: 2, max: 10 });

  return (
<NewDropdown>
      <ButtonDropdown id="dropdown-basic" variant="link">
        Dropdown Button
      </ButtonDropdown>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </NewDropdown>

  )
}
