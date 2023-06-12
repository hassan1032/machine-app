
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';


function MachineCard(props) {
    console.log(props)
    return (
        <div className='row mb-5'>

            {
                (props.allData || []).map((item, index) => {
                    return <div className='col-md-4'>
                        <Card>
                            <Card.Img variant="top" src={item?.image} />
                            <Card.Body>
                                <Card.Title>{item.machineName}</Card.Title>
                                <Card.Text>
                                    {index + 1}
                                    {item.machineId}
                                    {item.code}
                                    {item.additional}
                                </Card.Text>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Action
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item  onClick={() =>{
                                            props.deleteByMachineId(item.machineId)
                                        }}>Delete by id</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {
                                            props.deleteByIndex(index)
                                        }}>Delete current</Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Body>
                        </Card>
                    </div>
                }
                )
            }

        </div>
    );
}

export default MachineCard;