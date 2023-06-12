
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MachineRegistration = (props) => {
  console.log(props)
  return (
    <div className='container mt-5'>
      <div className='form-bg'>
        <div className='main-heading text-center mb-3'>
          <h3>Machine Registration Form</h3>
        </div>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={props.macineName} onChange={(e) => {
                  props.setMachineName(e.target.value)
                }} type="text" placeholder="Enter machine name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Code" value={props.Code} onChange={(e) => { props.setCode(e.target.value) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="file" placeholder="Choose photo" onChange={(e) => {

                  props.setSelectedImage(e.target.files?.[0])
                }} />
              </Form.Group>
            </Form>
          </div>
          <div className='col-md-6'>
            <form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Enter Machine id" value={props.MachineId} onChange={(e) => { props.setMachineId(e.target.value) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control as="textarea" placeholder="Additional details" value={props.AdditionalData} onChange={(e) => { props.setAdditionalData(e.target.value) }} />
              </Form.Group>


            </form>
          </div>
          <div className='a1 text-center'>
            <Button variant="primary" onClick={props.handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="row m-auto justify-content-center main">


      </div>
    </div>
  );
}

export default MachineRegistration;